import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieCharts.scss";

const PieCharts = () => {
  const data = [
    { name: "Tablate", value: 400, color: "#0088FE" },
    { name: "Mobil", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Keyboard", value: 200, color: "#FF8042" },
  ];
  return (
    <div className="pieChart">
      <h3>Leads By Source</h3>
      <div className="pie">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              innerRadius={"60%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.color} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="pieItems">
        {data.map((item) => (
          <div className="pieItemContainer" key={item.color}>
            <div className="dot" style={{ backgroundColor: item.color }}></div>
            <div className="texts">
              {" "}
              <div className="item">{item.name}</div>
              <div className="quantity">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieCharts;
