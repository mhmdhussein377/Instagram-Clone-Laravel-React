import {Link, useNavigate} from "react-router-dom";
import "./style.css";
import {AiFillFacebook} from "react-icons/ai";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Instagram from "./../../assets/Instagram.png";
import GooglePlay from "./../../assets/google-play.png";
import Microsoft from "./../../assets/microsoft.png";
import {useState} from "react";
import axios from "axios"
import {links} from "./../../utils.js"

const index = () => {

    const [inputs,
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
            let {data} = await axios.post("/login", inputs);
            localStorage.setItem("token", data.authorisation.token);
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    }

    const renderInput = (name, placeholder, onChange, type) => (
        <div>
            <input
                onChange={onChange}
                required
                name={name}
                type={type}
                placeholder={placeholder}/>
        </div>
    );

    const renderAppLogo = (className, src, alt) => (
        <div>
            <img className={className} src={src} alt={alt}/>
        </div>
    );

    return (
        <div className="login">
            <div className="login-top">
                <div className="main-box">
                    {renderAppLogo("instagram-log", Instagram, "Instagram")}
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            {renderInput('email', 'Username, or email', handleChange, 'email')}
                            {renderInput('password', 'Password', handleChange, 'password')}
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
                        {renderAppLogo('google-play-logo', GooglePlay, 'Google Play')}
                        {renderAppLogo('microsoft-logo', Microsoft, 'Microsoft')}
                    </div>
                </div>
            </div>
            <div className="login-bottom">
                <div className="links">
                    <ul>
                        {links.map((label, index) => (
                            <li key={index}>
                                <a href="#">{label}</a>
                            </li>
                        ))}
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
