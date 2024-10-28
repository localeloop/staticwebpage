interface EventData {
    month: any,
    date: string,
    day: string,
    title: string,
    description?: string,
    additionalInfo?: string
    price: number;
}

const EventData = [
    {
        month: 'October',
        performances: [
            {
                date: 6,
                day: 'Sun',
                performers: ['Alice Armstrong'],
                price: 6,
                description: 'Don\'t miss Alice Armstrong\'s performance on Sunday 6th October. Entry fee is £6.',
            },
            {
                date: 13,
                day: 'Sun',
                price: 5,
                performers: ['Samuel Ashton'],
                description: 'Join us for an unforgettable evening with Samuel Ashton on Sunday 13th October.',
            },
            {
                date: 20,
                day: 'Sun',
                price: 5,
                performers: ['Aqualine', 'Fever Rouge', 'Artroom'],
                description: 'Enjoy performances by Aqualine, Fever Rouge, and Artroom on Sunday 20th October.',
            },
            {
                date: 26,
                day: 'Sat',
                performers: ['Datura Roots Collective', 'Greg & Jack DJ'],
                price: 5,
                description: 'Celebrate Halloween with Datura Roots Collective and DJ Greg & Jack on Saturday 26th October. Entry fee is £500.',
            },
            {
                date: 27,
                day: 'Sun',
                price: 5,
                performers: ['Elephants with Shotguns', 'Cardboard'],
                description: 'End October with performances by Elephants with Shotguns and Cardboard on Sunday 27th October.',
            },
        ],
    },
    {
        month: 'November',
        performances: [
            {
                date: 1,
                day: 'Fri',
                performers: ['Si Hitchenson'],
                description: 'Enjoy the evening with Si Hitchenson\s loop pedal performance',
            },
            {
                date: 3,
                day: 'Sun',
                price: 5,
                performers: ['Empires, Empires', 'Ain\'t', 'Doops'],
            },
            {
                date: 10,
                day: 'Sun',
                price: 5,
                performers: ['Kit Trigg', 'Fiver', 'The Bluepers'],
            },
            {
                date: 17,
                day: 'Sun',
                price: 5,
                performers: ['The Dazed Minded', 'Puma Theory', 'Silverline'],
            },
            {
                date: 24,
                day: 'Sun',
                price: 5,
                performers: ['Sugar Darling', 'Tegalu Cat', 'Van Quan'],
            },
            {
                date: 29,
                day: 'Fri',
                performers: ['Si Hitchenson'],
            },
        ],
    },
];

export default EventData;