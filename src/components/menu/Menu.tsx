import { Link } from "react-router-dom";
import { menu } from "../../data";
import './menu.scss';
import { FaUserAlt, FaHome, FaUsers, FaOpencart,FaRegComments  } from 'react-icons/fa';
import { MdProductionQuantityLimits, MdOutlinePostAdd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";
import { LuListTodo } from "react-icons/lu";

const Menu = () => {

  const iconMap: any = {
    FaUserAlt,
    FaHome,
    FaUsers,
    MdProductionQuantityLimits,
    FaOpencart,
    MdOutlinePostAdd,FaCartShopping,FaRegComments,ImQuotesLeft,LuListTodo
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