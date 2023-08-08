import {Link} from "react-router-dom";
import "./style.css"
import {AiFillFacebook} from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io5"

const index = () => {
    return (
        <div className="register">
            <div className="register-top">
                <div className="main-box">
                    <div>
                        <img src="./../../assets/Instagram.png" alt="Instagram"/>
                    </div>
                    <p>Sign up to see photos and videos from your friends.</p>
                    <button>
                        <AiFillFacebook color="white"/>
                        Log in with Facebook
                    </button>
                    <div className="or">
                        <div className="line"></div>
                        <span>OR</span>
                        <div className="line"></div>
                    </div>
                    <form>
                        <div className="inputs">
                            <div>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Full Name"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div>
                                <input type="password" placeholder="Password"/>
                            </div>
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
                            <a href="">Terms</a>
                            ,<a href="">Privacy Policy</a>
                            and
                            <a href="">Cookies Policy</a>.
                        </p>
                        <button type="Submit">Sign up</button>
                    </form>
                </div>
                <div className="secondary-box">
                    <p>Have an account?
                        <Link to="/">Log in</Link>
                    </p>
                </div>
                <div className="apps">
                    <div>Get the app.</div>
                    <div className="apps-images">
                        <div><img src="./../../assets/google-play.png" alt="Google Play"/></div>
                        <div><img src="./../../assets/microsoft.png" alt="Microsoft"/></div>
                    </div>
                </div>
            </div>
            <div className="register-bottom">
                <div className="links">
                    <ul>
                        <li><a href="">Meta</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Help</a></li>
                        <li><a href="">API</a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                        <li><a href="">Top Accounts</a></li>
                        <li><a href="">Locations</a></li>
                        <li><a href="">Instagram Lite</a></li>
                        <li><a href="">Threads</a></li>
                        <li><a href="">Contact Uploading & Non-Users</a></li>
                        <li><a href="">Meta Verified</a></li>
                    </ul>
                </div>
                <div className="lang-copyrights">
                    <div className="lang">English <IoIosArrowDown /></div>
                    <div>&copy; 2023 Instagram from Meta</div>
                </div>
            </div>
        </div>
    );
}

export default index