import React, { Component } from 'react'
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

import {getDailyActivity} from '../services/api';

class DailyActivityGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      dailyActivity: [],
    };
  }
  
  componentDidMount() {
    this.getDailyActivity();
  }

  async getDailyActivity(){
    const dailyActivity = await getDailyActivity(12);
    if(dailyActivity.error)
      this.setState({ error: dailyActivity.error });
    else
    {
      this.setState({ dailyActivity: dailyActivity.data });
    }
  }

  generateData(){
    var data = [];
    const dataAPI = this.state.dailyActivity;
    if(dataAPI)
    {
        data = dataAPI;
    }
    else{
      let defaultData = {
        day: "Nan",
        kilogram: 0,
        calories: 0,
      } 
      data = defaultData;
    }
    return data;
  }

  render() {
    const data = this.generateData();
          
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
export default DailyActivityGraph;