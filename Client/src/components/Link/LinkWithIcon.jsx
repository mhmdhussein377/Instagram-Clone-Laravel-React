import React from 'react'

const LinkWithIcon = ({icon, text, onClick, className}) => {
    return (
        <div className={`${className ? className : "link"}`} onClick={onClick}>
            {icon && React.createElement(icon, {
                className: 'icon',
                size: 25
            })}
            {text}
        </div>
    )
}

export default LinkWithIcon