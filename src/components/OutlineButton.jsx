import React from 'react'
import PropTypes from "prop-types"

const OutlineButton = ({ textbutton, border, label }) => {
    return (
        <React.Fragment>
            <button className={['py-2 px-4 border rounded-full text-xs', `${textbutton}`, `${border}`].join(' ')}>{label}</button>
        </React.Fragment>
    )
}

OutlineButton.propTypes = {
    label: PropTypes.string.isRequired,
    textbutton: PropTypes.string,
    border: PropTypes.string.isRequired
}

OutlineButton.defaultProps = {
    label: "Outline Button",
    textbutton: "text-gray-700",
    border: "border-gray-700"
}

export default OutlineButton