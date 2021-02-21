import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Rechart(props) {
  const data = props.records.map(record => {
    let values = record.times.map((category, index) => {
      return {
        category,
        value: record.values[index]
      };
    });

    return {
      name: record.name,
      data: values
    };
  });
  return (
    <LineChart className="line-chart" width={1000} height={600}>
      <XAxis
        allowDataOverflow
        dataKey="category"
        allowDuplicatedCategory={false}
      />
      <YAxis allowDataOverflow dataKey="value" />
      <Tooltip />
      <Legend />
      {data.map(s => (
        <Line
          type="step"
          strokeWidth={2}
          activeDot={{ stroke: "red", strokeWidth: 1, r: 10 }}
          dataKey="value"
          data={s.data}
          stroke={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          name={s.name}
          key={s.name}
        />
      ))}
    </LineChart>
  );
}
