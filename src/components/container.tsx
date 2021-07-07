import React from 'react'

interface containerProps {
    className?: string
    children: React.ReactNode
}

const Container = ({ className, children }: containerProps) => {
    return (
        <div
            style={{ maxWidth: '1500px' }}
            className={`w-full h-auto sm:mx-auto p-6 flex flex-col items-center ${
                className && className
            }`}
        >
            {children}
        </div>
    )
}

export default Container
