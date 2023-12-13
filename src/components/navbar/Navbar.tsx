import './navbar.scss';
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <MdDashboard />
                <span>
                    admin Panel
                </span>
            </div>
            <div className='icons'>
                <CiSearch className="icon" />
                {/* <img src="./app.svg" alt="" className="icon" /> */}
                {/* <img src="./expand.svg" alt="" className="icon" /> */}
                <div className='notification'>
                    <IoMdNotificationsOutline className="icon" />
                    <span>1</span>
                </div>
                <div className='user'>
                    <FaUserAlt className="icon"/>
                    <span>Sarah</span>
                </div>
                <IoSettingsOutline className="icon" />

            </div>

        </div>
    )
}

export default Navbar