import "./style.css"
import Instagram from "./../../assets/Instagram.png"
import {AiFillHome, AiFillHeart} from "react-icons/ai";
import {BiSearch} from "react-icons/bi"
import {MdExplore, MdOutlineExplore} from "react-icons/md"
import {BsFillCameraReelsFill, BsPlusSquare} from "react-icons/bs";
import {BiMessageDots} from "react-icons/bi"
import {CiMenuBurger} from "react-icons/ci";
import {BiLogOut} from "react-icons/bi"
import axios from "axios";

const index = ({setIsSearchOpened, setIsModalOpened}) => {

    const handleLogout = async() => {
        try {
            const token = localStorage.getItem("token");
            await axios.post(`http://127.0.0.1:8000/api/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Instagram} alt=""/>
            </div>
            <div className="links">
                <div className="link">
                    <AiFillHome className="icon" size={25}/>
                    Home
                </div>
                <div className="link" onClick={() => setIsSearchOpened(true)}>
                    <BiSearch className="icon" size={25}/>
                    Search
                </div>
                <div className="link">
                    <MdExplore className="icon" size={25}/>
                    Explore
                </div>
                <div className="link">
                    <BsFillCameraReelsFill className="icon" size={25}/>
                    Reels
                </div>
                <div className="link">
                    <BiMessageDots className="icon" size={25}/>
                    Messages
                </div>
                <div className="link">
                    <AiFillHeart className="icon" size={25}/>
                    Notifications
                </div>
                <div className="link" onClick={() => setIsModalOpened(true)}>
                    <BsPlusSquare className="icon" size={25}/>
                    Create
                </div>
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
                <div className="logout" onClick={handleLogout}>
                    <BiLogOut size={25}/>
                    Logout
                </div>
                <div className="more">
                    <CiMenuBurger size={25} className="icon"/>
                    More
                </div>
            </div>
        </div>
    );
}

export default index