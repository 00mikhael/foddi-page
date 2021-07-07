import React from 'react'
import styles from '../styles/Interaction.module.css'

interface buttonProps {
    text: string
    className?: string
}

const Button = ({ text, className }: buttonProps) => {
    return (
        <button
            className={`${
                styles.button
            } px-6 py-2 text-lg text-white rounded-3xl bg-yellow-500 ${
                className && className
            }`}
        >
            {text}
        </button>
    )
}

export default Button
