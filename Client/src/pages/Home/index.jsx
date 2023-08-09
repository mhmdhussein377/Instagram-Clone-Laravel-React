import "./style.css"
import Sidebar from "./../../components/Sidebar"
import Feed from "./../../components/Feed"
import Friends from "./../../components/Friends"

const index = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="right-home">
                <Feed/>
                <Friends/>
            </div>
        </div>
    );
}

export default index