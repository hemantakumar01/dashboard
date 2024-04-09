import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  id: number;
  title: string;
  img: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities: { time: string; text: string }[];
};
const Single = ({ activities, chart, info, title, img }: Props) => {
  console.log(info);
  console.log(activities);
  return (
    <div className="single">
      <div className="user">
        <div className="details">
          <div className="intro">
            <img src={img} alt="" />
            <span>{title}</span>
            <button>Update</button>
          </div>
          {Object.entries(info).map((item) => (
            <div className="detailList" key={item[0]}>
              <div className="detailListItem">{item[0]}</div>
              <div className="detailListContant">{item[1]}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className="graphs">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chart.data}>
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              {chart.dataKeys.map((item) => (
                <Line type="monotone" dataKey={item.name} stroke={item.color} />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="activity">
        <h3>Latest Activity</h3>
        <ul>
          {activities.map((item) => (
            <li>
              <div>
                <p className="content">{item.text}</p>
                <time className="date">{item.time}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Single;
