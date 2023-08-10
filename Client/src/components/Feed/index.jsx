import {BiDotsHorizontalRounded} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa"
import {IoPaperPlaneOutline} from "react-icons/io5"
import {FiBookmark} from "react-icons/fi"
import {AiFillHeart} from "react-icons/ai"
import Post from "./../Post"
import Story from "./../Story"
import {useEffect, useState} from "react";
import axios from "axios";
import "./style.css"

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
                    {following.map((item, index) => (
                        <Story {...item} key={index} />
                    ))}
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