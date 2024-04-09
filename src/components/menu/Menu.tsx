import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";
menu;
const Menu = () => {
  return (
    <div className="menu">
      {menu.map((i) => (
        <div className="item" key={i.id}>
          <span className="title">{i.title}</span>
          {i.listItems.map((item) => (
            <Link to={item.url} className="menuItem" key={item.id}>
              <img src={item.icon} alt="" />
              <span className="listItemTitle">{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
