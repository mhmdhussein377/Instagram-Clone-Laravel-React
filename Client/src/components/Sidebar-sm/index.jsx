import {BsInstagram} from "react-icons/bs";
import Search from "./../../components/Search"
import "./style.css"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import LinkWithIcon from "../Link/LinkWithIcon";
import { getAdditionalLinks, getSidebarLinks } from "../../utils";

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
            await axios.post("/logout", null, {
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

    const links = getSidebarLinks(setIsSearchOpened, setIsModalOpened);

    const logoutAndMoreLinks = getAdditionalLinks(handleLogout);

    return (
        <div className="sidebar sidebar-sm">
            <div className="logo" onClick={() => setIsSearchOpened(false)}>
                <div className="icon">
                    <BsInstagram color="white" size={30}/>
                </div>
            </div>
            <div className="links">
                {links.map((link, index) => (<LinkWithIcon key={index} {...link}/>))}
                <div className="link profile">
                    <div className="profile">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className="bottom">
                {logoutAndMoreLinks.map((link, index) => <LinkWithIcon key={index} {...link} />)}
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
