import "./style.css"
import Sidebar from "./../../components/Sidebar"
import Feed from "./../../components/Feed"
import Friends from "./../../components/Friends"
import CreatePost from "./../../components/CreatePost"
import SidebarSm from "./../../components/Sidebar-sm"

const index = () => {
    return (
        <div className="home">
            {/* <Sidebar/> */}
            <SidebarSm />
            <div className="right-home">
                <Feed/>
                <Friends/>
            </div>
            {/* <CreatePost /> */}
        </div>
    );
}

export default index