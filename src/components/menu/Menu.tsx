import { Link } from "react-router-dom";
import { menu } from "../../data";
import './menu.scss';
import { FaUserAlt, FaHome, FaUsers, FaOpencart } from 'react-icons/fa';
import { MdProductionQuantityLimits, MdOutlinePostAdd } from "react-icons/md";

const Menu = () => {

  const iconMap: any = {
    FaUserAlt,
    FaHome,
    FaUsers,
    MdProductionQuantityLimits,
    FaOpencart,
    MdOutlinePostAdd
    // Add more icons here
  };

  return (
    <div className="side-menu">
      {menu.map((item) =>
        <div className="menu-item" key={item.id}>
          <span>{item.title}</span>

          {
            item.listItems.map((listItem) => {
              const IconComponent = iconMap[listItem.icon];
              return (
                <div className="" key={listItem.id}>
                  <Link to={listItem.url} className="listItem" key={listItem.id}>
                    <span>
                      {IconComponent && <IconComponent />}
                    </span>
                  
                    <span className="listItemTitle">{listItem.title}</span>
                  </Link>
                </div>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default Menu