import "./style.css"
import { MdOutlinePermMedia } from "react-icons/md"

const index = () => {
    return (
        <div className="create-post">
            <div className="close">X</div>
            <div className="box">
                <div className="title">Create new Post</div>
                <div className="bottom">
                    <div className="content">
                        <div className="icon"><MdOutlinePermMedia size={40} /></div>
                        <h3>Drag photos and videos here</h3>
                        <div>
                            <button>Select from computer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index