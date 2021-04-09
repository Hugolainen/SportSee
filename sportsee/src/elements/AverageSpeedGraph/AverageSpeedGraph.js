import React, { Component } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
  } from "recharts";

  import {getAverageSessions} from '../../api/api';

class AverageSpeedGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      averageSessions: [],
    };
  }
  
  componentDidMount() {
    this.getAverageSessions();
  }

  async getAverageSessions(){
    const averageSessions = await getAverageSessions(12);
    if(averageSessions.error)
      this.setState({ error: averageSessions.error });
    else
    {
      this.setState({ averageSessions: averageSessions.data });
    }
  }

  generateData(){
    var data = [];
    const dataAPI = this.state.averageSessions;
    if(dataAPI)
    {
        data = dataAPI;
    }
    else{
      let defaultData = {
        day: "Nan",
        sessionLength: 0
      } 
      data = defaultData;
    }
    return data;
  }

  render() {
    const data = this.generateData();

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
              data={data}
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
                <stop offset="40%"   stop-color="rgba(255,255,255,0.5)"/>
                <stop offset="100%" stop-color="#ffffff"/>
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

export default AverageSpeedGraph;