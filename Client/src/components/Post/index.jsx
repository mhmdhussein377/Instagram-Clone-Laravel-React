import { BiDotsHorizontalRounded } from "react-icons/bi";
import "./style.css"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";

const index = ({post}) => {

    let [isLiked, setIsLiked] = useState(post.liked_by_me)
    let [likesCount, setLikesCount] = useState(post.likes.length)

    const handleToggleLike = async(post) => {
        try {
            const token = localStorage.getItem("token");
            await axios.get(`http://127.0.0.1:8000/api/posts/${post.id}/toggle-like`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            isLiked ? setLikesCount(likesCount -= 1) : setLikesCount(likesCount += 1)
            setIsLiked(!isLiked)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div key={index} className="post">
            <div className="profile">
                <div className="left">
                    <div className="profile-pic">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                            alt=""/>
                    </div>
                    <div className="username">{post.user.username}</div>
                </div>
                <div className="dots">
                    <BiDotsHorizontalRounded size={30}/>
                </div>
            </div>
            <div className="post-content">
                <div className="post-pic">
                    <img src={"http://127.0.0.1:8000/storage/" + post.image_url} alt=""/>
                </div>
                <div className="reactions">
                    <div className="left">
                        <div className="icon heart" onClick={() => handleToggleLike(post)}>
                            {isLiked
                                ? (<AiFillHeart size={25} color="red"/>)
                                : (<AiOutlineHeart size={25}/>)}
                        </div>
                        <div className="icon comment">
                            <FaRegComment size={25}/>
                        </div>
                        <div className="icon share">
                            <IoPaperPlaneOutline size={25}/>
                        </div>
                    </div>
                    <div className="right">
                        <FiBookmark className="icon" size={25}/>
                    </div>
                </div>
                <div className="likes-count">
                    {likesCount}
                    likes
                </div>
            </div>
        </div>
    );
}

export default index