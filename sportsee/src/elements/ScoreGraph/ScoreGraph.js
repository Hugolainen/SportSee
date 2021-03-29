import React, { Component } from 'react'
import { PieChart, Pie, Cell } from "recharts";

class ScoreGraph extends Component {

    render() {
        const data = [
            { name: "Done", value: 30 },
            { name: "Left", value: 70 },
        ];
        const filling = [
            { name: "Filling", value: 1 },
        ];
        const colors = ["red", "#fbfbfb"];

        return (
            <div className="scoreGraph">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx={130}
                        cy={130}
                        innerRadius={80}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                        startAngle={90}
                        endAngle={450}
                        
                        opacity="100"
                        cornerRadius={10}
                    >

                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Pie data={filling} dataKey="value" nameKey="name" cx={130} cy={130} outerRadius={80} fill="white" />
                    <text fontSize="15px"
                        x={50}
                        y={50}
                        textAnchor="middle"
                        fill="black"
                    >
                    Score </text>

                    <text className="scoreGraph__value" x={140} y={130}>
                        {data[0].value +"%"}
                    </text>
                    <text className="scoreGraph__text" x={140} y={150}>
                        {"of your"}
                    </text>
                    <text className="scoreGraph__text" x={140} y={170}>
                        {"goal"}
                    </text>
                </PieChart>
            </div>
        );
    }
  }
export default ScoreGraph;