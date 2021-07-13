import React, { Component } from 'react'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer
} from 'recharts';

class RadarGraph extends Component {
  combineData(data, kind){
    var dataList = [];
    for(let i=0; i<data.length; i++){
      let dataItem = {
        value: data[i].value,
        kind: kind[data[i].kind],
      }
      dataList[i] = dataItem;
    }
    return dataList;
  }

  render() {
    const kind = this.props.kind;
    const data = this.props.data;
    const dataList = this.combineData(data, kind);

    return (
        <div className="radarGraph">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                        outerRadius="55%"
                        data={dataList}
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