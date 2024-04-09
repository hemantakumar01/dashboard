import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChat.scss";
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
const BarChats = (props: Props) => {
  return (
    <div className="barBox">
      <h3>{props.title}</h3>
      <div className="barchat">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              cursor={{ fill: "none" }}
              contentStyle={{ backgroundColor: "#2a3447" }}
              labelStyle={{ display: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChats;
