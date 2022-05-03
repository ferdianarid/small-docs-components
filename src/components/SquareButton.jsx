import React from 'react'
import PropTypes from "prop-types"

const SquareButton = ({ textbutton, bgbutton, border, label }) => {
    return (
        <React.Fragment>
            <button className={['py-2 px-4 rounded-md text-xs', `${textbutton}`, `${bgbutton}`, `${border}`].join(' ')}>{label}</button>
        </React.Fragment>
    )
}

SquareButton.propTypes = {
    label: PropTypes.string.isRequired,
    textbutton: PropTypes.string.isRequired,
    bgbutton: PropTypes.string.isRequired,
    border: PropTypes.string
}

SquareButton.defaultProps = {
    label: "Square Button",
    textbutton: "text-white",
    bgbutton: "bg-blue-700",
    border: "border-none"
}


export default SquareButton