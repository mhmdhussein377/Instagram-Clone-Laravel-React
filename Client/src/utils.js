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