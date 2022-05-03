import React from 'react'
import PropTypes from "prop-types"

const Input = ({ label, type, inputsize }) => {
    let size = ''
    if (inputsize == 'small') {
        size = 'py-2 px-3 text-xs'
    } else if (inputsize == 'large') {
        size = 'py-3 px-4 text-sm'
    }
    return (
        <React.Fragment>
            <input type={type} name={label} id={label} placeholder={`Enter ${label}`} className={['rounded-md border border-gray-500', `${size}`].join(' ')} />
        </React.Fragment>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    inputsize: PropTypes.oneOf(['small', 'large'])
}

Input.defaultProps = {
    label: "Username",
    type: "text",
    inputsize: "small"
}

export default Input