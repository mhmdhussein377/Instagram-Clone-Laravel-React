import "./style.css"
import Sidebar from "./../../components/Sidebar"
import Feed from "./../../components/Feed"
import Friends from "./../../components/Friends"
import CreatePost from "./../../components/CreatePost"
import SidebarSm from "./../../components/Sidebar-sm"
import {useEffect, useState} from "react"
import axios from "axios"

const index = () => {

    const [isSearchOpened,
        setIsSearchOpened] = useState(false)
    const [isModalOpened,
        setIsModalOpened] = useState(false)
    const [following,
        setFollowing] = useState([]);
    const [searchedUsers,
        setSearchedUsers] = useState([])
    const [user,
        setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        Promise.all([
            axios.get("/user", headers),
            axios.get("/user/following", headers)
        ]).then(([userResponse, followingResponse]) => {
            setUser(userResponse.data.user);
            setFollowing(followingResponse.data.following);
        });
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