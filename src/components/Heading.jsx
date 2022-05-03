import React from 'react'
import PropTypes from "prop-types"

const Heading = ({ title, subtitle }) => {
    return (
        <React.Fragment>
            <h1 className="font-bold text-lg text-gray-900">{title}</h1>
            <h3 className="font-normal text-xs text-gray-600">{subtitle}</h3>
        </React.Fragment>
    )
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

Heading.defaultProps = {
    title: "Hello World",
    subtitle: "This is an example Primary Heading"
}


export default Heading