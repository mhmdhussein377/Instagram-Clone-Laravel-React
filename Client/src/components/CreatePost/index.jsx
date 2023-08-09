import "./style.css"
import {MdOutlinePermMedia} from "react-icons/md"
import {FaArrowLeftLong} from "react-icons/fa6"
import {VscChromeClose} from "react-icons/vsc";

const index = () => {
    return (
        <div className="create-post">
            <div className="close">
                <VscChromeClose className="icon" color="white" size={30}/>
            </div>
            <div className="box empty">
                <div className="title">Create new Post</div>
                <div className="bottom">
                    <div className="content">
                        <div className="icon">
                            <MdOutlinePermMedia size={50}/>
                        </div>
                        <h3>Drag photos and videos here</h3>
                        <div>
                            <button>Select from computer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box filled">
                <div className="title">
                    <div>
                        <div className="back-icon icon">
                            <FaArrowLeftLong size={20}/>
                        </div>
                    </div>
                    <div>
                        <button>Create Post</button>
                    </div>
                </div>
                <div className="bottom">
                    <div className="img-content">
                        <img
                            src="https://img.freepik.com/premium-photo/forest-river-with-reflection-trees-water-digital-painting_890887-7465.jpg?w=740"
                            alt="post-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index