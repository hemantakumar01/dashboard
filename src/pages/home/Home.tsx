import BigCharts from "../../components/BigCharts/BigCharts";
import PieCharts from "../../components/PieChart/PieCharts";
import Top from "../../components/Top/Top";
import BarChats from "../../components/barChats/BarChats";
import ChartsBox from "../../components/charts/ChartsBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="main-box">
        <div className=" box box1">
          <Top />
        </div>
        <div className="box box2">
          <ChartsBox {...chartBoxUser} />
        </div>
        <div className="box box3">
          <ChartsBox {...chartBoxProduct} />
        </div>
        <div className="box box4">
          <PieCharts />
        </div>
        <div className="box box5">
          <ChartsBox {...chartBoxRevenue} />
        </div>
        <div className="box box6">
          <ChartsBox {...chartBoxConversion} />
        </div>
        <div className="box box7">
          <BigCharts />
        </div>
        <div className="box box8">
          <BarChats {...barChartBoxVisit} />
        </div>
        <div className="box box9">
          <BarChats {...barChartBoxRevenue} />
        </div>
      </div>
    </div>
  );
};

export default Home;
