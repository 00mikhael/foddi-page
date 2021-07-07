import React from 'react'
import ReactStars from 'react-rating-stars-component'

const Rating = ({ count }) => {
    return (
        <div className={`text-yellow-600`}>
            <ReactStars
                count={5}
                value={count || 5}
                size={24}
                isHalf={true}
                color={`#cbd5e0`}
                activeColor={`#fca010`}
            />
        </div>
    )
}

export default Rating
