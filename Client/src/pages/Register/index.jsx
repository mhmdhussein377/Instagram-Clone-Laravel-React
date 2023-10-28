import {Link, useNavigate} from "react-router-dom";
import "./style.css"
import {AiFillFacebook} from "react-icons/ai"
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import Instagram from "./../../assets/Instagram.png"
import GooglePlay from "./../../assets/google-play.png"
import Microsoft from "./../../assets/microsoft.png"
import {useState} from "react";
import axios from "axios"
import {RegisterInputFields, handleInputsChange, links} from "../../utils";
import Input from "./../../components/UI/Input"
import AppLogo from "../../components/UI/AppLogo"

const index = () => {

    const [inputs,
        setInputs] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        handleInputsChange(e, setInputs)
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            let {data} = await axios.post("/register", inputs);
            localStorage.setItem("token", data.authorisation.token);
            navigate("/home");
        } catch (error) {
            console.log(error)
        }
    }

    const renderedInputs = RegisterInputFields.map(({ name, placeholder, type }, index) => (
        <Input key={index} name={name} placeholder={placeholder} onChange={(e) => handleChange(e, setInputs, inputs)} type={type} />
    ));

    return (
        <div className="register">
            <div className="register-top">
                <div className="main-box">
                    <AppLogo className="instagram-logo" src={Instagram} alt="Instagram"/>
                    <p>Sign up to see photos and videos from your friends.</p>
                    <button className="login-facebook">
                        <AiFillFacebook size={20} color="white"/>
                        Log in with Facebook
                    </button>
                    <div className="or">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            {renderedInputs}
                        </div>
                        <p>
                            People who use our service may have uploaded your contact information to
                            Instagram.
                            <a href="https://www.facebook.com/help/instagram/261704639352628">
                                Learn More
                            </a>
                        </p>
                        <p>
                            By signing up, you agree to our
                            <a href="">Terms</a>,<a href="">Privacy Policy</a>
                            and
                            <a href="">Cookies Policy</a>.
                        </p>
                        <button type="submit" className="signup-button">Sign up</button>
                    </form>
                </div>
                <div className="secondary-box">
                    <p>
                        Have an account?
                        <Link to="/">Log in</Link>
                    </p>
                </div>
                <div className="apps">
                    <div>Get the app.</div>
                    <div className="apps-images">
                        <AppLogo className="google-play-logo" src={GooglePlay} alt="Google Play"/>
                        <AppLogo className="microsoft-logo" src={Microsoft} alt="Microsoft"/>
                    </div>
                </div>
            </div>
            <div className="register-bottom">
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
}

export default index