
const Input = ({name, placeholder, onChange, type}) => {
    return (
        <div>
            <input
                onChange={onChange}
                required
                name={name}
                type={type}
                placeholder={placeholder}/>
        </div>
    )
}

export default Input