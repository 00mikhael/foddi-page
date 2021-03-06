import React from 'react'
import Image from 'next/image'

import Container from '../../components/container'
import SectionHeading from '../../components/sectionHeading'
import ContactForm from '../../components/contactForm'

import { ContactData as Data } from '../../appData'

const Contact = () => {
    return (
        <div className={`relative overflow-hidden mt-12 sm:mt-0`}>
            <Container>
                <SectionHeading
                    title={Data.title}
                    subtitle={Data.subtitle}
                    doubleTitle={true}
                />
                <ContactForm buttonText={Data.buttonText} />
            </Container>
            <span className={`absolute -right-8 -bottom-16 -mr-6`}>
                <Image width={100} height={100} src={Data.backgroundImage} />
            </span>
        </div>
    )
}

export default Contact
