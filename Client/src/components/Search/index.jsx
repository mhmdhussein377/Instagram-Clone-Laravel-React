/* eslint-disable react/jsx-key */
import {useEffect, useState} from "react";
import "./style.css"
import {AiOutlineSearch} from "react-icons/ai"
import axios from "axios"

const index = () => {

    let [users,
        setUsers] = useState([]);
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
                setUsers(data.users)
            } catch (error) {
                console.log(error)
            }
        }
        if (searchInput !== "") {
            getUsers()
        }
    }, [searchInput])

    console.log(users)

    console.log(users.length > 0)

    return (
        <div className="search">
            <h3>Search</h3>
            <div className="search-input">
                <div className="icon">
                    <AiOutlineSearch color="white" size={20}/>
                </div>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder="Search"/>
            </div>
            {users.length > 0
                ? (
                    <div className="content filled">
                        {users.map((user) => (
                            <div className="user">
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