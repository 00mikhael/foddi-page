import React from 'react'
import Image from 'next/image'
import { IoAdd } from 'react-icons/io5'
import FadeIn from 'react-fade-in'
import Skeleton from 'react-loading-skeleton'

import styles from '../styles/Interaction.module.css'

import Rating from './rating'

interface itemProps {
    id: string
    strMeal: string
    strMealThumb: string
    description: string
    title: string
    price: string
    ratings: number
}

const SpecialList = ({ list }: any) => {
    const flipPrice = (meals: itemProps[]) => {
        let result = meals.map(meal => {
            if (meal.price && meal.price[0] === '$') {
                let priceArr = meal.price.split('')
                priceArr.shift()
                priceArr.push(`$`)
                let priceString = priceArr.join('')
                meal.price = priceString
            }
            return meal
        })

        return result
    }

    return (
        <FadeIn
            className={`list flex flex-wrap flex-row gap-6  my-10 mx-auto justify-center`}
        >
            {flipPrice(list).map((item: itemProps) => (
                <SpecialItem
                    key={item.id}
                    id={item.id}
                    strMeal={item.strMeal}
                    strMealThumb={item.strMealThumb}
                    description={item.description}
                    title={item.title}
                    price={item.price}
                    ratings={item.ratings}
                />
            ))}
        </FadeIn>
    )
}

const SpecialItem = ({
    strMeal,
    strMealThumb,
    description,
    title,
    price,
    ratings
}: itemProps) => {
    return (
        <div
            style={{
                flexBasis: '23.5rem',
                width: '100%',
                height: 'auto',
                maxWidth: '23.5rem',
                display: 'grid',
                gridTemplateColumns: 'auto',
                gridTemplateRows: '1fr 1fr'
            }}
            className={`flex-grow shadow-lg hover:shadow-md rounded-tr-3xl rounded-bl-3xl  overflow-hidden  my-2 md:my-0 bg-white text-lg `}
        >
            <div
                style={{
                    position: 'relative',
                    maxWidth: '475px',
                    height: '275px'
                }}
                className={`row-start-1 row-end-2 col-span-full w-full`}
            >
                {strMealThumb ? (
                    <Image
                        className={`rounded-bl-3xl`}
                        layout='fill'
                        objectFit='cover'
                        src={strMealThumb}
                        alt='meal'
                    />
                ) : (
                    <div className={`rounded-bl-3xl h-full overflow-hidden`}>
                        <Skeleton height={`100%`} />
                    </div>
                )}
            </div>
            <div
                className={`row-start-2 row-end-3 col-span-full flex flex-col`}
            >
                <div
                    className={`flex items-start justify-between font-bold text-2xl px-4 pt-4`}
                >
                    <span>{title || <Skeleton />}</span>
                    <span>{price || <Skeleton />}</span>
                </div>
                <span className={`text-gray-800 text-base px-4`}>
                    {strMeal || <Skeleton />}
                </span>
                <span className={`p-4 text-base flex-1 `}>
                    {(description && description.substr(0, 96) + '...') || (
                        <Skeleton count={3} />
                    )}
                </span>
                <div
                    className={`flex items-center justify-between pl-4 ${
                        !ratings && `space-x-32 invisible sm:visible`
                    }`}
                >
                    <Rating className='' count={ratings} />
                    <div
                        className={`${styles.button} bg-yellow-500 p-4 rounded-tl-3xl cursor-pointer`}
                    >
                        <IoAdd size={50} color={`white`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialList
