import "./style.css"
import {MdOutlinePermMedia} from "react-icons/md"
import {FaArrowLeftLong} from "react-icons/fa6"
import {VscChromeClose} from "react-icons/vsc";
import {useRef, useState} from "react";

const index = ({setIsModalOpened}) => {

    let [input,
        setInput] = useState(null)
    const fileRef = useRef(null)
    const imageRef = useRef(null)

    let base64 = "";

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
                base64 = reader.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // handle image updating fileInput.addEventListener("input", );

    return (
        <div className="create-post">
            <div className="close" onClick={() => setIsModalOpened(false)}>
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
                            <div>
                                <button>Create Post</button>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="img-content">
                                <img
                                    ref={imageRef}
                                    alt="post-img"/>
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
                                <div>
                                    <button onClick={() => fileRef.current.click()}>
                                        Select from computer
                                    </button>
                                </div>
                                <input
                                    onChange={handleInput}
                                    ref={fileRef}
                                    style={{
                                    display: "none"
                                }}
                                    type="file"/>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default index