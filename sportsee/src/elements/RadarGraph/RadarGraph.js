import React, { Component } from 'react'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer
} from 'recharts';

import {getPerformance} from '../../api/api';

class RadarGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          performance: []
        };
    }

    componentDidMount() {
        this.getPerformance();
    }

    async getPerformance(){
        const performance = await getPerformance(12);
        if(performance.error)
          this.setState({ error: performance.error });
        else
        {
    
          var reshapedPerformance = [];
          for(let i=0; i<performance.data.data.length; i++){
            let perf = {
              value: performance.data.data[i].value,
              kind: performance.data.kind[performance.data.data[i].kind]
            }
            reshapedPerformance[i] = perf;
          }
          this.setState({ performance: reshapedPerformance });
        }
    }

    generateData(){
        var data = [];
        const dataAPI = this.state.performance;
        if(dataAPI.length > 0)
        {
            data = dataAPI;
        }
        else{
            const defaultData = [];
            for(let i=0; i<6;i++){
                let defaultKind = {
                    value: 0,
                    kind: "Nan"
                  }
                  defaultData[i] = defaultKind;
                }
                data = defaultData;
            } 
            return data;
    }

    render() {
        var data = this.generateData();

        return (
            <div className="radarGraph">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                            outerRadius="55%"
                            data={data}
                    >
                        <PolarGrid 
                                stroke = "white"
                        />
                        <PolarAngleAxis 
                                dataKey="kind" 
                                stroke = "white"
                                axisLine= {false}
                                tickLine={false}
                        />
                            
                        <Radar
                            dataKey="value"
                            fill="#ff0101"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

        );
    }
  }
export default RadarGraph;