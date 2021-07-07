import React from 'react'
import Image from 'next/image'

import Container from '../../components/container'
import SectionHeading from '../../components/sectionHeading'
import TestimonialList from '../../components/testimonialList'

import { testimonialsData as Data } from '../../appData'

const Testimonials = () => {
    return (
        <div className={`relative overflow-hidden h-96`}>
            <Container>
                <SectionHeading
                    title={Data.title}
                    subtitle={Data.subtitle}
                    slogan={Data.slogan}
                />
                <TestimonialList />
            </Container>
            <span
                className={`absolute -right-16 top-4 -mr-10 hidden md:inline-block`}
            >
                <Image width={250} height={250} src={Data.backgroundImage} />
            </span>
        </div>
    )
}

export default Testimonials
