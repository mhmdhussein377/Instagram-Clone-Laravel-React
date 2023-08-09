import "./style.css"
import Sidebar from "./../../components/Sidebar"
import Feed from "./../../components/Feed"
import Friends from "./../../components/Friends"
import CreatePost from "./../../components/CreatePost"
import SidebarSm from "./../../components/Sidebar-sm"
import { useState } from "react"

const index = () => {

    let [isSearchOpened, setIsSearchOpened] = useState(false)
    let [isModalOpened, setIsModalOpened] = useState(false)
    let [following, setFollowing] = useState([]);

    return (
        <div className="home">
            {isSearchOpened ? <SidebarSm setIsSearchOpened={setIsSearchOpened} setIsModalOpened={setIsModalOpened} /> : <Sidebar setIsSearchOpened={setIsSearchOpened} setIsModalOpened={setIsModalOpened} />}
            <div className="right-home">
                <Feed/>
                <Friends following={following} setFollowing={setFollowing}/>
            </div>
            {isModalOpened && <CreatePost setIsModalOpened={setIsModalOpened} />}
        </div>
    );
}

export default index