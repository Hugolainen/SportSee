import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer
} from 'recharts';

/**
 * Component displaying the user's performances using a radar chart from 'recharts'
 *
 * @component
 * @example
 * const kind = {"1": 'strength', "2": 'stamina', "3": 'mental'}
 * const data = [{value: 50, kind:1}, {value: 20, kind:2}, {value: 35, kind:3}]
 *  * return (
 *   <RadarGraph kind={kind} data={data}/>
 * )
 */
class RadarGraph extends Component {
  /**
    * Combines the Kind and Data objects to one object fitted to the user of the recharts radar graph:
    * @param   {object} kind Object containing the translation from Kind-number to Kind-string
    * @param   {array} data  Array of objects containing the couples Kind-number and Kind-performance value
    * @return  {array}       Array of objects containing the couples Kind-string and Kind-performance value
  */
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