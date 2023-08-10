/* eslint-disable react/jsx-key */
import {useEffect, useState} from "react";
import "./style.css"
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios"

const index = ({user, following, setFollowing, searchedUsers, setSearchedUsers}) => {

    let [searchInput,
        setSearchInput] = useState("")

    useEffect(() => {
        const token = localStorage.getItem("token")
        const getUsers = async() => {
            try {
                let {data} = await axios.get(`http://127.0.0.1:8000/api/search-users/${searchInput}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(data.users)
                if (searchInput == "") {
                    setSearchedUsers([])
                    return
                }
                setSearchedUsers(data.users.filter(item => item.id !== user.id))
            } catch (error) {
                console.log(error)
            }
        }
        if (searchInput !== "") {
            getUsers()
        }
    }, [searchInput, following])

    const handleToggleFollow = async(e, user) => {
        e.target.innerText === "Follow"
            ? e.target.innerText = "Unfollow"
            : e.target.innerText = "Follow"

        try {

            if (following.some((item) => item.id === user.id)) {
                setFollowing((prev) => prev.filter((item) => item.id !== user.id));
            } else {
                setFollowing((prev) => [...new Set([user, ...prev])]);
            }

            const token = localStorage.getItem("token")
            await axios.get(`http://127.0.0.1:8000/api/toggle-follow/${user.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })


        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (e) => {
        setSearchInput(e.target.value)

        if (e.target.value == "") {
            setSearchedUsers([])
        }
    }

    return (
        <div className="search">
            <h3>Search</h3>
            <div className="search-input">
                <div className="icon">
                    <AiOutlineSearch color="white" size={20}/>
                </div>
                <input
                    value={searchInput}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search"/>
            </div>
            {searchedUsers.length > 0
                ? (
                    <div className="content filled">
                        {searchedUsers.map((user) => (
                            <div className="user">
                                <div className="left">
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
                                <div className="right" onClick={e => handleToggleFollow(e, user)}>{user.is_followed_by_me
                                        ? "Unfollow"
                                        : "Follow"}</div>
                            </div>
                        ))}
                    </div>
                )
                : (
                    <div className="content empty">
                        <div className="head">Recent</div>
                        <div className="bottom">No recent searches</div>
                    </div>
                )}
        </div>
    );
}

export default index