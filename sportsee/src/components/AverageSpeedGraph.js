import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

class AverageSpeedGraph extends Component {

  render() {
    const sessions = this.props.sessions;
    const CustomTooltip = ({ active, payload}) => {
      if (active && payload && payload.length) {
          return (
              <div className="averageSpeedGraph__tooltip">
                  <p>{`${payload[0].value}min`}</p>
              </div>
          );
      }
      return null;
    };

    return (
      <div className="averageSpeedGraph">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
              data={sessions}
              margin={{
                  top: 60,
                  right: 20,
                  left: 20,
                  bottom: 20
              }}
          >
            <XAxis 
              className="averageSpeedGraph__legend" 
              stroke="white" dataKey="day"  
              axisLine={false} 
              tickLine={false} 
              tickMargin={20}
            />
            <Tooltip content={<CustomTooltip />}/>

            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="40%"   stopColor="rgba(255,255,255,0.5)"/>
                <stop offset="100%" stopColor="#ffffff"/>
              </linearGradient>
            </defs>


            <Line
              dot={false}
              type="natural"
              dataKey="sessionLength"
              stroke="url(#linear)"
              strokeWidth={3}
              activeDot={{ stroke: 'white', strokeWidth: 5, r: 3 }}
            />

            <text 
              className="averageSpeedGraph__title"
              fontSize="15px"
              x="15%"
              y="15%"
            > Average speed of</text>
            <text 
              className="averageSpeedGraph__title"
              fontSize="15px"
              x="15%"
              y="24%"
            > your sessions </text>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

AverageSpeedGraph.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,
    })
  )
}

AverageSpeedGraph.defaultProps = {
  sessions: [{day: 0, sessionLength:0}]
}

export default AverageSpeedGraph;