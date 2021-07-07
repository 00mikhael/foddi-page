import React from 'react'

import Container from '../../components/container'
import SpecialList from '../../components/specialList'
import SectionHeading from '../../components/sectionHeading'
import Button from '../../components/button'

import useMeals from '../../hooks/useMeals'
import { specialsData as Data } from '../../appData'

const Specials = () => {
    const [meals, error] = useMeals()

    return (
        <div className={`flex-1 mt-8`}>
            <Container>
                <SectionHeading title={Data.title} subtitle={Data.subtitle} />
                <SpecialList list={meals} />
                <Button text={Data.buttonText} />
            </Container>
        </div>
    )
}

export default Specials
