import React from 'react'
import Image from 'next/image'
import FadeIn from 'react-fade-in'

import Rating from './rating'

interface itemProps {
    id: number
    name: string
    avatar: string
    location: string
    message: string
    rating: number
    className: string
}

interface Indexes {
    previousIndex: number
    currentIndex: number
    nextIndex: number
}

const TestimonialList = ({ list }: any) => {
    const [indexes, setIndexes] = React.useState<Indexes>({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    })

    const handleCardTransition = React.useCallback(() => {
        if (indexes.currentIndex >= list.length - 1) {
            setIndexes({
                previousIndex: list.length - 1,
                currentIndex: 0,
                nextIndex: 1
            })
        } else {
            setIndexes(prevState => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex:
                    prevState.currentIndex + 2 === list.length
                        ? 0
                        : prevState.currentIndex + 2
            }))
        }
    }, [indexes.currentIndex])

    React.useEffect(() => {
        const transitionInterval = setInterval(() => {
            handleCardTransition()
        }, 10000)

        return () => clearInterval(transitionInterval)
    }, [handleCardTransition, indexes])

    function determineClasses(indexes: Indexes, cardIndex: number) {
        if (indexes.currentIndex === cardIndex) {
            return 'active'
        } else if (indexes.nextIndex === cardIndex) {
            return 'next'
        } else if (indexes.previousIndex === cardIndex) {
            return 'prev'
        }
        return 'inactive'
    }

    return (
        <div
            style={{ width: '100%', height: '400px' }}
            className={`flex flex-col my-4 mx-auto items-center mt-8`}
        >
            <FadeIn className={`w-full h-full relative`}>
                {list.map((item: itemProps, index: number) => (
                    <TestimonialItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        avatar={item.avatar}
                        location={item.location}
                        message={item.message}
                        rating={item.rating}
                        className={`card ${determineClasses(indexes, index)}`}
                    />
                ))}
            </FadeIn>
        </div>
    )
}

const TestimonialItem = ({
    name,
    avatar,
    location,
    message,
    rating,
    className
}: itemProps) => {
    return (
        <div
            className={`${className} absolute left-0 right-0 my-6 mx-auto  w-full h-auto max-w-xl rounded-lg overflow-hidden flex flex-col items-center md:my-0 p-6 bg-white`}
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
