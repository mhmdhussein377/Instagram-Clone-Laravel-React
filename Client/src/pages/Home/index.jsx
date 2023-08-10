import "./style.css"
import Sidebar from "./../../components/Sidebar"
import Feed from "./../../components/Feed"
import Friends from "./../../components/Friends"
import CreatePost from "./../../components/CreatePost"
import SidebarSm from "./../../components/Sidebar-sm"
import {useEffect, useState} from "react"
import axios from "axios"

const index = () => {

    let [isSearchOpened,
        setIsSearchOpened] = useState(false)
    let [isModalOpened,
        setIsModalOpened] = useState(false)
    let [following,
        setFollowing] = useState([]);
    let [searchedUsers,
        setSearchedUsers] = useState([])

    let [user,
        setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        const getUser = async() => {
            let {data} = await axios.get("http://127.0.0.1:8000/api/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser(data.user);
        };
        const getFollowing = async() => {
            let {data} = await axios.get("http://127.0.0.1:8000/api/user/following", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setFollowing(data.following);
        };
        getUser();
        getFollowing();
    }, []);

    return (
        <div className="home">
            {isSearchOpened
                ? <SidebarSm
                        searchedUsers={searchedUsers}
                        setSearchedUsers={setSearchedUsers}
                        setFollowing={setFollowing}
                        following={following}
                        setIsSearchOpened={setIsSearchOpened}
                        setIsModalOpened={setIsModalOpened}
                        user={user}/>
                : <Sidebar
                    setIsSearchOpened={setIsSearchOpened}
                    setIsModalOpened={setIsModalOpened}/>}
            <div className="right-home">
                <Feed following={following}/>
                <Friends
                    user={user}
                    setSearchedUsers={setSearchedUsers}
                    following={following}
                    setFollowing={setFollowing}/>
            </div>
            {isModalOpened && <CreatePost setIsModalOpened={setIsModalOpened}/>}
        </div>
    );
}

export default index