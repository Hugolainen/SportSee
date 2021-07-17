import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    //console.log(this.props);
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

RadarGraph.propTypes = {
  kind: PropTypes.shape({
    "1": PropTypes.string,
    "2": PropTypes.string,
    "3": PropTypes.string,
    "4": PropTypes.string,
    "5": PropTypes.string,
    "6": PropTypes.string
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
        value: PropTypes.number,
        kind: PropTypes.number
    })
  )
}

RadarGraph.defaultProps = {
  kind: {
    "1": '',
    "2": '',
    "3": '',
    "4": '',
    "5": '',
    "6": ''
  },
  data: [{value: 0, kind:0}]
}

export default RadarGraph;