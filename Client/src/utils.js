import {AiFillHome, AiFillHeart} from "react-icons/ai";
import {BiSearch} from "react-icons/bi";
import {MdExplore} from "react-icons/md";
import {BsFillCameraReelsFill, BsPlusSquare} from "react-icons/bs";
import {BiMessageDots} from "react-icons/bi";
import {CiMenuBurger} from "react-icons/ci";
import {BiLogOut} from "react-icons/bi"

export const links = [
    'Meta',
    'About',
    'Blog',
    'Jobs',
    'Help',
    'API',
    'Privacy',
    'Terms',
    'Top Accounts',
    'Locations',
    'Instagram Lite',
    'Threads',
    'Contact Uploading & Non-Users',
    'Meta Verified'
]

export const getSidebarLinks = (setIsSearchOpened, setIsModalOpened) => {
    return [
        {
            icon: AiFillHome,
            text: 'Home'
        }, {
            icon: BiSearch,
            text: 'Search',
            onClick: () => setIsSearchOpened(true)
        }, {
            icon: MdExplore,
            text: 'Explore'
        }, {
            icon: BsFillCameraReelsFill,
            text: 'Reels'
        }, {
            icon: BiMessageDots,
            text: 'Messages'
        }, {
            icon: AiFillHeart,
            text: 'Notifications'
        }, {
            icon: BsPlusSquare,
            text: 'Create',
            onClick: () => setIsModalOpened(true)
        }
    ];
};

export const getAdditionalLinks = (handleLogout) => {
    return [
        {
            icon: BiLogOut,
            text: 'Logout',
            onClick: handleLogout,
            className: 'logout'
        }, {
            icon: CiMenuBurger,
            text: 'More',
            className: 'more'
        }
    ];
};

export const LoginInputFields = [
    {
        name: "email",
        placeholder: "Username, or email",
        type: "email"
    }, {
        name: "password",
        placeholder: "Password",
        type: "password"
    }
];

export const RegisterInputFields = [
    {
        name: "email",
        placeholder: "Email",
        type: "email"
    }, {
        name: "name",
        placeholder: "Full Name",
        type: "text"
    }, {
        name: "username",
        placeholder: "Username",
        type: "text"
    }, {
        name: "password",
        placeholder: "Password",
        type: "password"
    }
];

export const handleInputsChange = (e, setInputs) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}