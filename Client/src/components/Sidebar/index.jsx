import "./style.css"
import Instagram from "./../../assets/Instagram-white.png"
import {AiFillHome, AiFillHeart} from "react-icons/ai";
import {BiSearch} from "react-icons/bi"
import {MdExplore} from "react-icons/md"
import {BsFillCameraReelsFill, BsPlusSquare} from "react-icons/bs";
import {BiMessageDots} from "react-icons/bi"
import {CiMenuBurger} from "react-icons/ci";
import {BiLogOut} from "react-icons/bi"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import LinkWithIcon from "../Link/LinkWithIcon";

const index = ({setIsSearchOpened, setIsModalOpened}) => {

    const navigate = useNavigate()

    const handleLogout = async() => {
        try {
            const token = localStorage.getItem("token");
            await axios.post("http://127.0.0.1:8000/api/logout", null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem("token")
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    const links = [
        {
            icon: AiFillHome,
            text: 'Home'
        }, {
            icon: BiSearch,
            text: 'Search',
            onClick: () => setIsSearchOpened(true)
        }, {
            icon: MdExplore,
            text: 'Explore'
        }, {
            icon: BsFillCameraReelsFill,
            text: 'Reels'
        }, {
            icon: BiMessageDots,
            text: 'Messages'
        }, {
            icon: AiFillHeart,
            text: 'Notifications'
        }, {
            icon: BsPlusSquare,
            text: 'Create',
            onClick: () => setIsModalOpened(true)
        }
    ];

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Instagram} alt=""/>
            </div>
            <div className="links">
                {links.map((link, index) => (<LinkWithIcon key={index} {...link}/>))}
                <div className="link profile">
                    <div className="profile">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                            alt=""/>
                    </div>
                    Profile
                </div>
            </div>
            <div className="bottom">
                <LinkWithIcon
                    icon={BiLogOut}
                    text="Logout"
                    onClick={handleLogout}
                    className="logout"/>
                <LinkWithIcon icon={CiMenuBurger} text="More" className="more"/>
            </div>
        </div>
    );
}

export default index