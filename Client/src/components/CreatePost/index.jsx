import "./style.css"
import {MdOutlinePermMedia} from "react-icons/md"
import {FaArrowLeftLong} from "react-icons/fa6"
import {VscChromeClose} from "react-icons/vsc";
import {useRef, useState} from "react";
import axios from "axios";

const index = ({setIsModalOpened}) => {

    let [input,
        setInput] = useState(null)
    let [base64,
        setBase64] = useState("")
    const fileRef = useRef(null)
    const imageRef = useRef(null)

    const handleInput = (e) => {
        if (e.target.files.length > 0) {
            function getBase64(file) {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                });
            }
            setInput(e.target.files[0])
            getBase64(e.target.files[0]).then((data) => {
                imageRef.current.src = data;
            });

            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleCreatePost = async() => {

        try {
            const token = localStorage.getItem("token")
            const newBase64 = base64.split(",")[1]
            await axios.post(`/create-post`, {
                image: newBase64
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setIsModalOpened(false)
        } catch (error) {
            setIsModalOpened(false);
            console.log(error)
        }
    }

    const closeModal = () => {
        setIsModalOpened(false)
    }

    const handleFileClick = () => {
        fileRef
            .current
            .click()
    }

    const Button = (label, handleClick) => {
        return (
            <div>
                <button onClick={handleClick}>
                    {label}
                </button>
            </div>
        )
    }

    return (
        <div className="create-post">
            <div className="close" onClick={closeModal}>
                <VscChromeClose className="icon" color="white" size={30}/>
            </div>
            {input
                ? (
                    <div className="box filled">
                        <div className="title">
                            <div>
                                <div className="back-icon icon">
                                    <FaArrowLeftLong onClick={() => setInput("")} size={20}/>
                                </div>
                            </div>
                            {Button("Create Post", handleCreatePost)}
                        </div>
                        <div className="bottom">
                            <div className="img-content">
                                <img ref={imageRef} alt="post-img"/>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="box empty">
                        <div className="title">Create new Post</div>
                        <div className="bottom">
                            <div className="content">
                                <div className="icon">
                                    <MdOutlinePermMedia size={50}/>
                                </div>
                                <h3>Drag photos and videos here</h3>
                                {Button("Select from computer", handleFileClick)}
                                <input
                                    onChange={handleInput}
                                    ref={fileRef}
                                    style={{display: "none"}}
                                    type="file"/>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default index