import {useEffect, useState} from "react";
import "./style.css"
import axios from "axios";

const index = ({user, setFollowing, following, setSearchedUsers}) => {

    

    const handleUnfollow = async(friend) => {
        setFollowing((prev) => prev.filter((item) => item.id !== friend.id));

        const token = localStorage.getItem("token")
        await axios.get(`http://127.0.0.1:8000/api/toggle-follow/${friend.id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    return (
        <div className="friends">
            <div className="my-profile">
                <div className="profile-pic">
                    <img
                        src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                        alt=""/>
                </div>
                <div className="data">
                    <div className="username">{user.username}</div>
                    <div className="name">{user.name}</div>
                </div>
            </div>
            <h5>Friends</h5>
            <div className="friends-list">
                {following.map((friend, index) => (
                    <div className="profile" key={index}>
                        <div className="left">
                            <div className="profile-pic">
                                <img
                                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                                    alt=""/>
                            </div>
                            <div className="data">
                                <div className="username">{friend.username}</div>
                                <div className="name">{friend.name}</div>
                            </div>
                        </div>
                        <div className="right" onClick={() => handleUnfollow(friend)}>Unfollow</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default index