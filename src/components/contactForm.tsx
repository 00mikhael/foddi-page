import React from 'react'

import Button from './button'
import styles from '../styles/Interaction.module.css'

interface contactFormProps {
    buttonText: string
}

const ContactForm = ({ buttonText }: contactFormProps) => {
    return (
        <div
            className={`${styles.shadow_round} bg-white pr-4 my-6 rounded-full max-w-2xl w-full flex items-center z-10 mx-48`}
        >
            <input
                className={`rounded-full focus:outline-none mr-2 ml-8 my-4 p-2 w-full`}
                type={`email`}
                placeholder={`yourmail@gmail.com`}
            />
            <Button className={`flex-1 `} text={buttonText} />
        </div>
    )
}

export default ContactForm
