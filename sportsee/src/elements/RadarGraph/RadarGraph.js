import React, { Component } from 'react'
import { 
    Radar, 
    RadarChart, 
    PolarGrid, 
    PolarAngleAxis, 
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
                <RadarChart
                        cx={130}
                        cy={130}
                        outerRadius={80}
                        width={260}
                        height={260}
                        data={data}
                    >
                        <PolarGrid 
                            stroke = "white"
                        />
                        <PolarAngleAxis 
                            dataKey="attribute" 
                            stroke = "white"
                        />
                        
                        <Radar
                            dataKey="value"
                            fill="#ff0101"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
            </div>

        );
    }
  }
export default RadarGraph;