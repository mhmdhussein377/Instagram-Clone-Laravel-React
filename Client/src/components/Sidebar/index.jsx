import "./style.css"
import Instagram from "./../../assets/Instagram-white.png"
import axios from "axios";
import {useNavigate} from "react-router-dom"
import LinkWithIcon from "../Link/LinkWithIcon";
import { getAdditionalLinks, getSidebarLinks } from "../../utils";

const index = ({setIsSearchOpened, setIsModalOpened}) => {

    const navigate = useNavigate()

    const handleLogout = async() => {
        try {
            const token = localStorage.getItem("token");
            await axios.post("/logout", null, {
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

    const links = getSidebarLinks(setIsSearchOpened, setIsModalOpened);

    const logoutAndMoreLinks = getAdditionalLinks(handleLogout);

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
                {logoutAndMoreLinks.map((link, index) => <LinkWithIcon key={index} {...link}/>)}
            </div>
        </div>
    );
}

export default index