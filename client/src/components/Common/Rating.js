import React from 'react'

const Rating = ({ rating }) => {
    return (
        <>
            <div className="flex mb-4">
                <span className="flex items-center">
                    {[...Array(rating)].map((_, index) => (
                        <svg
                            key={index}
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    ))}
                    {[...Array(5 - rating)].map((_, index) => (
                        <svg
                            key={index}
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 text-indigo-500"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                        </svg>
                    ))}
                    <span className="text-gray-600 ml-3">{rating} Reviews</span>
                </span>
            </div>
        </>
    )
}

export default Rating