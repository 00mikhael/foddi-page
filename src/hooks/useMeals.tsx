import React from 'react'

import { SkeletonData } from '../appData'

const useMeals = () => {
    const url = 'https://asm-dev-api.herokuapp.com/api/v1/food'

    const [{ meals, error }, setState] = React.useState({
        meals: SkeletonData,
        error: null
    })

    const fetchMeals = async (url: string) => {
        try {
            const res = await fetch(url)
            const { data } = await res.json()
            const subset = data.meals.slice(0, 6)
            setState({ meals: subset, error: null })
        } catch (err) {
            setState(state => ({ ...state, error: err }))
        }
    }

    React.useEffect(() => {
        fetchMeals(url)
    }, [])

    return [meals, error]
}

export default useMeals
