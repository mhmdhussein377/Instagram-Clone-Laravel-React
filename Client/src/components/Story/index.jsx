import "./style.css"

const index = ({username}) => {
    return (
        <div className="story">
            <div className="profile-pic">
                <img
                    src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1691570136~exp=1691570736~hmac=576643e1b7fe42a13cba560394e3fec7ba404f7c5054f9cb6adbc5beaf86357f"
                    alt=""/>
            </div>
            <div className="name">{username}</div>
        </div>
    );
}

export default index