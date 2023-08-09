import {Link, useNavigate} from "react-router-dom";
import "./style.css";
import {AiFillFacebook} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Instagram from "./../../assets/Instagram.png";
import GooglePlay from "./../../assets/google-play.png";
import Microsoft from "./../../assets/microsoft.png";
import {useState} from "react";
import axios from "axios"

const index = () => {

    let [inputs,
        setInputs] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let {data} = await axios.post("http://127.0.0.1:8000/api/login", inputs);
            localStorage.setItem("token", data.authorisation.token);
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login">
            <div className="login-top">
                <div className="main-box">
                    <div>
                        <img className="instagram-logo" src={Instagram} alt="Instagram"/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <div>
                                <input
                                    onChange={handleChange}
                                    required
                                    name="email"
                                    type="email"
                                    placeholder="Username, or email"/>
                            </div>
                            <div>
                                <input
                                    onChange={handleChange}
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Password"/>
                            </div>
                        </div>
                        <button className="login-button" type="submit">
                            Log in
                        </button>
                        <div className="or">
                            <div className="line"></div>
                            <span>OR</span>
                            <div className="line"></div>
                        </div>
                        <div className="facebook-login"><AiFillFacebook size={20}/>
                            Log in with Facebook</div>
                    </form>
                    <div className="forgot-password">Forgot password?</div>
                </div>
                <div className="secondary-box">
                    <p>
                        Don't an account?
                        <Link to="/register">Sign up</Link>
                    </p>
                </div>
                <div className="apps">
                    <div>Get the app.</div>
                    <div className="apps-images">
                        <div>
                            <img className="google-play-logo" src={GooglePlay} alt="Google Play"/>
                        </div>
                        <div>
                            <img className="microsoft-logo" src={Microsoft} alt="Microsoft"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-bottom">
                <div className="links">
                    <ul>
                        <li>
                            <a href="">Meta</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Jobs</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                        <li>
                            <a href="">API</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Terms</a>
                        </li>
                        <li>
                            <a href="">Top Accounts</a>
                        </li>
                        <li>
                            <a href="">Locations</a>
                        </li>
                        <li>
                            <a href="">Instagram Lite</a>
                        </li>
                        <li>
                            <a href="">Threads</a>
                        </li>
                        <li>
                            <a href="">Contact Uploading & Non-Users</a>
                        </li>
                        <li>
                            <a href="">Meta Verified</a>
                        </li>
                    </ul>
                </div>
                <div className="lang-copyrights">
                    <div className="lang">
                        English
                        <MdOutlineKeyboardArrowDown size={20}/>
                    </div>
                    <div>&copy; 2023 Instagram from Meta</div>
                </div>
            </div>
        </div>
    );
};

export default index;
