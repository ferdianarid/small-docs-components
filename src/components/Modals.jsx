import React from 'react'
import PropTypes from "prop-types"

const Modals = ({ title, subtitle, bgmodals, textmodals }) => {
    return (
        <React.Fragment>
            <div className={['w-full max-w-sm rounded-lg p-4 text-white', `${bgmodals}`].join(' ')}>
                <h1 className="font-bold text-md">{title}</h1>
                <h1 className="font-normal text-xs mt-2 leading-relaxed">{subtitle}</h1>
                <div className="flex items-center space-x-3 mt-5">
                    <button className={['py-2 px-3 rounded-md text-xs font-medium bg-white', `${textmodals}`].join(' ')}>Register now</button>
                    <button className="py-2 px-3 rounded-md text-xs font-medium border border-white text-white bg-transparent">Maybe later</button>
                </div>
            </div>
        </React.Fragment>
    )
}

Modals.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgmodals: PropTypes.string,
    textmodals: PropTypes.string
}

Modals.defaultProps = {
    title: "Modal Component",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae recusandae, totam provident minus distinctio dolore",
    bgmodals: "bg-blue-600",
    textmodals: "text-blue-700"
}

export default Modals