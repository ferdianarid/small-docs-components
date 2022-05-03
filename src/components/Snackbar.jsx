import React from 'react'
import PropTypes from "prop-types"
import { FaInfoCircle, FaExclamationCircle, FaCheckCircle } from "react-icons/fa"
import 'styles/index.css'

const Snackbar = ({ message, bgSnackbar, icons }) => {
    return (
        <React.Fragment>
            <div className={['w-fit rounded-md px-4 py-3', `${bgSnackbar}`].join(' ')}>
                <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-xs text-white">{message}</h3>
                    {icons == 'info' ?
                        <FaInfoCircle width={48} height={48} className="text-white" />
                        : icons == 'error' ?
                            <FaExclamationCircle width={48} height={48} className="text-white" />
                            : icons == 'success' ?
                                <FaCheckCircle width={48} height={48} className="text-white" />
                                : icons == 'warning' ? <FaExclamationCircle width={48} height={48} className="text-white" />
                                    : ''}
                </div>
            </div>
        </React.Fragment>
    )
}

Snackbar.propTypes = {
    message: PropTypes.string.isRequired,
    bgSnackbar: PropTypes.string,
    icons: PropTypes.oneOf(['info', 'error', 'success', 'warning'])
}

Snackbar.defaultProps = {
    message: "Thanks for your subscriptions",
    bgSnackbar: "bg-blue-700",
    icons: 'info'
}
export default Snackbar