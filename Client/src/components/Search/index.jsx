import "./style.css"
import { AiOutlineSearch } from "react-icons/ai"

const index = () => {
    return (
        <div className="search">
            <h3>Search</h3>
            <div className="search-input">
                <div className="icon"><AiOutlineSearch size={20} /></div>
                <input type="text" placeholder="Search" />
            </div>
            <div className="content empty">
                <div className="head">Recent</div>
                <div className="bottom">
                    No recent searches
                </div>
            </div>
            <div className="content filled">
                <div className="user">
                    <div className="profile-pic">
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index