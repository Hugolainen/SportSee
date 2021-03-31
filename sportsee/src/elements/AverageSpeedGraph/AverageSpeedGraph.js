import React, { Component } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

class AverageSpeedGraph extends Component {
    
    render() {

        const data = [
            {
              name: "M",
              value: 70
            },
            {
              name: "T",
              value: 10
            },
            {
              name: "W",
              value: 30
            },
            {
              name: "T",
              value: 50
            },
            {
              name: "F",
              value: 0
            },
            {
              name: "S",
              value: 10
            },
            {
              name: "S",
              value: 20
            }
        ];

        const CustomTooltip = ({ active, payload, label }) => {
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
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5
                    }}
                >
                  <XAxis className="averageSpeedGraph__legend" stroke="white" dataKey="name"  axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />}/>

                  <Line
                    dot={false}
                    type="monotone"
                    dataKey="value"
                    stroke="white"
                    strokeWidth={3}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
        );
    }
  }
export default AverageSpeedGraph;