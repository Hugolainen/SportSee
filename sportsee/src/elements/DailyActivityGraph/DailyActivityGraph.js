import React, { Component } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

class DailyActivityGraph extends Component {
    
    render() {
        const data = [
            {
              name: "1",
              weigth: 65,
              burnedCal: 200,
            },
            {
              name: "2",
              weigth: 66,
              burnedCal: 100,
            },
            {
              name: "3",
              weigth: 68,
              burnedCal: 500,
            },
            {
              name: "4",
              weigth: 67,
              burnedCal: 600,
            },
            {
              name: "5",
              weigth: 66,
              burnedCal: 600,
            },
            {
              name: "6",
              weigth: 66,
              burnedCal: 600,
            },
            {
              name: "7",
              weigth: 66,
              burnedCal: 800,
            },
            {
              name: "8",
              weigth: 65,
              burnedCal: 150,
            },
            {
              name: "9",
              weigth: 66,
              burnedCal: 400,
            },
            {
              name: "10",
              weigth: 65,
              burnedCal: 200,
            }
          ];
          
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
          
          const editLegendText = (value: string) => {
            var legendTxt="";
            if(value === "weigth"){
              legendTxt= "Weight (kg)";
            }
            else{
              legendTxt= "Burned calories (kCal)";
            }
            return <span className="dailyActivityGraph__legend">{legendTxt}</span>;
          };

        return (
            <div className="dailyActivityGraph">
                <BarChart
                  width={835}
                  height={320}
                  data={data}
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
      <XAxis tickLine={false} dataKey="name" stroke="#9B9EAC"/>
      <YAxis domain={['dataMin - 100', 'dataMax + 100']} hide={true} yAxisId="left" orientation="left"/>
      <YAxis tickLine={false} axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} yAxisId="right" orientation="right" stroke="#9B9EAC"/>
      <Tooltip content={<CustomTooltip />}/>
      <Legend height={100} formatter={editLegendText} iconSize={8} iconType="circle" align="right" verticalAlign="top"/>
      <Bar radius={[10, 10, 0, 0]} yAxisId="right" dataKey="weigth" fill="#282D30" />
      <Bar radius={[10, 10, 0, 0]} yAxisId="left" dataKey="burnedCal" fill="#E60000" />
      <text 
        className="dailyActivityGraph__title"
        fontSize="15px"
        x={70}
        y={35}
        textAnchor="middle"
        fill="black"
    > Daily activity </text>
    </BarChart>
            </div>
        );
    }
  }
export default DailyActivityGraph;