import React, { Component } from 'react'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
    ResponsiveContainer
} from 'recharts';

class RadarGraph extends Component {
    
    render() {
        const data = [
            {
                attribute: 'intensity',
                value: 100,
            },
            {
                attribute: 'Speed',
                value: 20,
            },
            {
                attribute: 'Strength',
                value: 50,
            },
            {
                attribute: 'Endurance',
                value: 40,
            },
            {
                attribute: 'Energy',
                value: 80,
            },
            {
                attribute: 'Cardio',
                value: 80,
            },
        ];

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
                                dataKey="attribute" 
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