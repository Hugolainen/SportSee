import React, { Component } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer} from "recharts";

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
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={90}
                            paddingAngle={5}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            cy="55%"
                            opacity="100"
                            cornerRadius={10}
                        >

                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Pie cy="55%" data={filling} dataKey="value" nameKey="name" outerRadius={80} fill="white" />
                        <text fontSize="15px"
                            x={50}
                            y={50}
                            textAnchor="middle"
                            fill="black"
                        >
                        Score </text>

                        <text className="scoreGraph__value" x="50%" y={130}>
                            {data[0].value +"%"}
                        </text>
                        <text className="scoreGraph__text" x="50%" y={150}>
                            {"of your"}
                        </text>
                        <text className="scoreGraph__text" x="50%" y={170}>
                            {"goal"}
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
  }
export default ScoreGraph;