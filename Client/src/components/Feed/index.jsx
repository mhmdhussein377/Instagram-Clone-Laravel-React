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

    const [posts,
        setPosts] = useState([])
    const [loading,
        setLoading] = useState(false)

    useEffect(() => {
        const getPosts = async() => {
            try {
                setLoading(true)
                const token = localStorage.getItem("token")
                let {data} = await axios.get("http://127.0.0.1:8000/api/user/following/posts", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setPosts(data.posts)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getPosts()
    }, [following])

    return (
        <div className="feed">
            <div className="content">
                <div className="stories">
                    {following.map((item, index) => (<Story {...item} key={index}/>))}
                </div>
                <div className="posts">
                    {loading ? <h1 className="loading">Loading...</h1> : posts.length > 0
                        ? posts.map((post, index) => (<Post post={post} key={index}/>))
                        : <h1 className="no-posts">No Posts</h1>}
                </div>
            </div>
        </div>
    );
}

export default index