import React from 'react'
import Image from 'next/image'

import FadeIn from 'react-fade-in'
import Skeleton from 'react-loading-skeleton'

import Rating from './rating'
interface itemProps {
    id: number
    name: string
    avatar: string
    location: string
    message: string
    rating: number
}

const TestimonialList = ({ list }: any) => {
    return (
        <FadeIn
            className={`list flex flex-col gap-6  my-10 mx-auto items-center w-full `}
        >
            {list.map((item: itemProps) => (
                <TestimonialItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    location={item.location}
                    message={item.message}
                    rating={item.rating}
                />
            ))}
        </FadeIn>
    )
}

const TestimonialItem = ({
    name,
    avatar,
    location,
    message,
    rating
}: itemProps) => {
    return (
        <div
            className={`w-full h-auto max-w-xl shadow-lg hover:shadow-md rounded-lg overflow-hidden flex flex-col items-center my-2 md:my-0 p-6 bg-white `}
        >
            <Image
                className={`rounded-full`}
                width={100}
                height={100}
                alt='customer'
                src={avatar}
            />
            <span className={`mt-6 text-base text-center`}>{message}</span>
            <Rating className={`mt-1`} count={rating} />
            <span className={`font-bold text-lg mt-2`}>{name}</span>
            <span className={`text-sm text-gray-700`}>{location}</span>
        </div>
    )
}

export default TestimonialList
