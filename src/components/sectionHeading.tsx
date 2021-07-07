import React from 'react'

interface headingProps {
    title: string
    subtitle?: string
    slogan?: string
    doubleTitle?: boolean
}

const SectionHeading = ({
    title,
    subtitle,
    slogan,
    doubleTitle
}: headingProps) => {
    return (
        <div className={`flex flex-col items-center text-center`}>
            {subtitle && (
                <span
                    className={`${
                        doubleTitle
                            ? `text-4xl font-semibold`
                            : `text-2xl text-yellow-500`
                    }`}
                >
                    {subtitle}
                </span>
            )}
            <h2 className={`text-4xl font-semibold`}>{title}</h2>
            {slogan && <p className={`text-lg text-gray-700`}>{slogan}</p>}
        </div>
    )
}

export default SectionHeading
