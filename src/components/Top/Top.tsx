import "./top.scss";
import { topDealUsers } from "../../data";
const Top = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="user">
              <img src={item.img} alt="" />
              <div className="userTexts">
                <span className="username">{item.username}</span>
                <span className="email">{item.email}</span>
              </div>
            </div>
            <span className="amount">₹{item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;
