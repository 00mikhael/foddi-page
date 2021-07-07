import vegetables from './assets/vegetables.png'
import oval from './assets/oval.svg'

// app data
export const appData = {
    name: 'Foddi',
    description: 'We Serve The Taste You Love'
}

// specials section data
export const specialsData = {
    title: 'What We Are Serving',
    subtitle: 'Our Specials',
    buttonText: 'Learn More'
}

// testimonials section data
export const testimonialsData = {
    title: 'What They Are Saying',
    subtitle: 'Testimonial',
    slogan: 'it’s through mistakes that you actually can grow.',
    backgroundImage: vegetables,
    testimonials: [
        {
            id: 1,
            name: 'Keman',
            avatar: 'https://uifaces.co//our-content//donated//eYVoSxV5.jpg',
            location: 'Tokyo',
            message:
                'Initially i was a bit skeptical, but after the first patronage I just can’t forget the taste of their meal that day.',
            rating: 5
        },
        {
            id: 2,
            name: 'Mary',
            avatar: 'https://uifaces.co/our-content/donated/Zh_4oc5l.jpg',
            location: 'Milan',
            message:
                'Initially i was a bit skeptical, but after the first patronage I just can’t forget the taste of their meal that day.',
            rating: 5
        },
        {
            id: 3,
            name: 'Lokossou',
            avatar: 'https://uifaces.co//our-content//donated//OOYrwOZH.jpg',
            location: 'Kampala',
            message:
                'Initially i was a bit skeptical, but after the first patronage I just can’t forget the taste of their meal that day.',
            rating: 5
        }
    ]
}

// contact section data
export const ContactData = {
    title: 'Let us help you',
    subtitle: 'Have Question in mind?',
    buttonText: 'Send',
    backgroundImage: oval
}

// skeleton loading data
export const SkeletonData = [
    {
        id: 1,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    },
    {
        id: 2,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    },
    {
        id: 3,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    },
    {
        id: 4,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    },
    {
        id: 5,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    },
    {
        id: 6,
        strMeal: null,
        strMealThumb: null,
        description: null,
        title: null,
        price: null,
        ratings: null
    }
]
