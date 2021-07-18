import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

/**
 * Component displaying the user's daily activity results with a bar chart from 'recharts'
 *
 * @component
 * @example
 * const activity = [{day: '2020-11-01', kilogram:70, calories:1920}, {day: '2020-11-02', kilogram:71, calories:1670}]
 *  * return (
 *   <DailyActivityGraph activity={activity}/>
 * )
 */
class DailyActivityGraph extends Component {

  render() {
    const sessions = this.props.activity;
    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="dailyActivityGraph__tooltip">
            <p className="dailyActivityGraph__tooltip__text">{`${payload[0].value}kg`}</p>
            <p className="dailyActivityGraph__tooltip__text">{`${payload[1].value}kCal`}</p>
          </div>
        );
      }
    
      return null;
    };
          
    const editLegendText = (value) => {
      var legendTxt="";
      if(value === "kilogram"){
        legendTxt= "Weight (kg)";
      }
      else{
        legendTxt= "Burned calories (kCal)";
      }
      return <span className="dailyActivityGraph__legend">{legendTxt}</span>;
    };

    return (
      <div className="dailyActivityGraph">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={sessions}
              margin={{
                top: 20,
                right: 0,
                left: 40,
                bottom: 20
              }}
              barCategoryGap={54}
              barGap={8}
              barSize={7}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis tickLine={false} dataKey="day" stroke="#9B9EAC" />
              <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide={true} yAxisId="left" orientation="left"/>
              <YAxis tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} yAxisId="right" orientation="right" stroke="#9B9EAC"/>
              <Tooltip content={<CustomTooltip />}/>
              <Legend height={100} formatter={editLegendText} iconSize={8} iconType="circle" align="right" verticalAlign="top"/>
              <Bar radius={[10, 10, 0, 0]} yAxisId="right" dataKey="kilogram" fill="#282D30" />
              <Bar radius={[10, 10, 0, 0]} yAxisId="left" dataKey="calories" fill="#E60000" />
              <text 
                className="dailyActivityGraph__title"
                fontSize="15px"
                x={70}
                y={35}
                textAnchor="middle"
                fill="black"
              > Daily activity </text>
            </BarChart>
          </ResponsiveContainer>
      </div>
   );
  }
}

DailyActivityGraph.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
        day: PropTypes.string,
        kilogram: PropTypes.number,
        calories: PropTypes.number
    })
  )
}

DailyActivityGraph.defaultProps = {
  activity: [{day: '0000-00-00', kilogram:0, calories:0}]
}

export default DailyActivityGraph;