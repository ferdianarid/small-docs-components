import React from 'react'

const Layouts = ({ children }) => {
    return (
        <React.Fragment>
            <div className="m-5">{children}</div>
        </React.Fragment>
    )
}

export default Layouts