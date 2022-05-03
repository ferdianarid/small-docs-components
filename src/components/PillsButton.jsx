import React from 'react'
import PropTypes from "prop-types"

const PillsButton = ({ label, textbutton, bgbutton, border }) => {
    return (
        <React.Fragment>
            <button className={['py-2 px-4 rounded-full text-xs', `${textbutton}`, `${bgbutton}`, `${border}`].join(' ')}>{label}</button>
        </React.Fragment>
    )
}

PillsButton.propTypes = {
    label: PropTypes.string.isRequired,
    textbutton: PropTypes.string.isRequired,
    bgbutton: PropTypes.string.isRequired,
    border: PropTypes.string
}

PillsButton.defaultProps = {
    label: "Action Button",
    textbutton: "text-white",
    bgbutton: "bg-blue-700",
    border: "border-none"
}

export default PillsButton