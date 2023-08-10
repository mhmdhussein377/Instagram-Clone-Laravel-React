import {BiDotsHorizontalRounded} from "react-icons/bi";
import "./style.css"
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa"
import {IoPaperPlaneOutline} from "react-icons/io5"
import {FiBookmark} from "react-icons/fi"
import {useEffect, useState} from "react";
import axios from "axios";
import {AiFillHeart} from "react-icons/ai"
import Post from "./../Post"

const index = ({following}) => {

    let [posts,
        setPosts] = useState([])

    useEffect(() => {
        const getPosts = async() => {
            const token = localStorage.getItem("token")
            let {data} = await axios.get("http://127.0.0.1:8000/api/user/following/posts", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log("postsss")
            console.log(data.posts)
            console.log("postsss")
            setPosts(data.posts)
        }
        getPosts()
    }, [following])

    return (
        <div className="feed">
            <div className="content">
                <div className="stories">
                    <div className="story">
                        <div className="profile-pic">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                                alt=""/>
                        </div>
                        <div className="name">mhmd_hussein</div>
                    </div>
                    <div className="story">
                        <div className="profile-pic">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                                alt=""/>
                        </div>
                        <div className="name">mhmd_hussein</div>
                    </div>
                    <div className="story">
                        <div className="profile-pic">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                                alt=""/>
                        </div>
                        <div className="name">mhmd_hussein</div>
                    </div>
                </div>
                <div className="posts">
                    {posts.length > 0 ? posts.map((post, index) => (
                        <Post post={post} key={index} />
                    )) : <h1 className="no-posts">No Posts</h1>}
                </div>
            </div>
        </div>
    );
}

export default index