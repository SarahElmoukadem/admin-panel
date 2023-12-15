import { Link } from "react-router-dom";
import { menu } from "../../data";
import './menu.scss';

const Menu = () => {
  return (
    <div className="side-menu">
      {menu.map((item) => (
        <div className="menu-item" key={item.id}>
          <span>{item.title}</span>

          {
            item.listItems.map((listItem) => (
              <div className="" key={listItem.id}>
                <Link to={listItem.url} className="listItem" key={listItem.id}>
                  {/* <span>
                  {listItem.icon}
                  </span> */}
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              </div>
            ))
          }
        </div>
      ))}
    </div>
  )
}

export default Menu