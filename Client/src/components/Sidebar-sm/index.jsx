import {AiFillHome, AiFillHeart} from "react-icons/ai";
import {BiSearch, BiLogOut} from "react-icons/bi";
import {MdExplore} from "react-icons/md";
import {BsFillCameraReelsFill, BsPlusSquare, BsInstagram} from "react-icons/bs";
import {BiMessageDots} from "react-icons/bi";
import {CiMenuBurger} from "react-icons/ci";
import Search from "./../../components/Search"
import "./style.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const index = ({
    setIsSearchOpened,
    setIsModalOpened,
    following,
    setFollowing,
    searchedUsers,
    setSearchedUsers,
    user
}) => {

    const navigate = useNavigate()

    const handleLogout = async() => {
        try {
            const token = localStorage.getItem("token");
            console.log(token);
            let response = await axios.post("http://127.0.0.1:8000/api/logout", null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem("token");
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="sidebar sidebar-sm">
            <div className="logo" onClick={() => setIsSearchOpened(false)}>
                <div className="icon">
                    <BsInstagram color="white" size={30}/>
                </div>
            </div>
            <div className="links">
                <div className="link">
                    <AiFillHome className="icon" size={25}/>
                </div>
                <div className="link search-icon" onClick={() => setIsSearchOpened(false)}>
                    <BiSearch className="icon" size={25}/>
                </div>
                <div className="link">
                    <MdExplore className="icon" size={25}/>
                </div>
                <div className="link">
                    <BsFillCameraReelsFill className="icon" size={25}/>
                </div>
                <div className="link">
                    <BiMessageDots className="icon" size={25}/>
                </div>
                <div className="link">
                    <AiFillHeart className="icon" size={25}/>
                </div>
                <div className="link" onClick={() => setIsModalOpened(true)}>
                    <BsPlusSquare className="icon" size={25}/>
                </div>
                <div className="link profile">
                    <div className="profile">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="logout">
                    <BiLogOut size={25} onClick={handleLogout}/>
                </div>
                <div className="more">
                    <CiMenuBurger size={25} className="icon"/>
                </div>
            </div>
            <Search
                user={user}
                searchedUsers={searchedUsers}
                setSearchedUsers={setSearchedUsers}
                following={following}
                setFollowing={setFollowing}/>
        </div>
    );
};

export default index;
