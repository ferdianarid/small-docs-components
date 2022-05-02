import React from "react";
import PropTypes from 'prop-types';
import 'styles/index.css'
import 'styles/cards.css'

const Cards = ({ title, size, description, category, backgrounds, colortext, bgCategory, colorcategory }) => {
    return (
        <React.Fragment>
            <div className={['rounded-md p-4', `${backgrounds}`, `${colortext}`, `card-${size}`].join(' ')}>
                <div className="flex justify-between mb-5 items-center">
                    <h1 className="font-bold -ml-[1px] text-md">{title}</h1>
                    <h1 className={['py-1 px-3 rounded-full font-semibold text-xs', `${bgCategory}`, `${colorcategory}`].join(' ')}>{category}</h1>
                </div>
                <p className={'font-normal text-xs leading-relaxed'}>{description}</p>
            </div>
        </React.Fragment>
    )
}

Cards.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    backgrounds: PropTypes.string,
    bgCategory: PropTypes.string,
    colortext: PropTypes.string,
    colorcategory: PropTypes.string
}

Cards.defaultProps = {
    title: "Hello World",
    description: "This is a notification components, used in case when user doing something like purchase or other actions",
    category: "Programming",
    size: 'small',
    backgrounds: 'bg-blue-800',
    bgCategory: 'bg-white',
    colortext: 'text-white',
    colorcategory: 'text-blue-800'
}

export default Cards