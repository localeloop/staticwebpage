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
        month: 'September',
        performances: [
            {
                date: 8,
                day: 'Sun',
                price: 5,
                performers: ['Black Market', 'Arid Wave', 'Liquid Dogs'],
                description: 'Enjoy performances by Black Market, Arid Wave, and Liquid Dogs this Sunday.',
            },
            {
                date: 15,
                day: 'Sun',
                price: 5,
                performers: ['The Mezz', 'Sour Kix', 'Armstrong'],
                description: 'A Sunday packed with exciting performances from The Mezz, Sour Kix, and Armstrong.',
            },
            {
                date: 22,
                day: 'Sun',
                price: 5,
                performers: ['The Landings', 'Sunshine Pony Club'],
                description: 'Catch The Landings and Sunshine Pony Club live on Sunday 22nd September.',
            },
            {
                date: 27,
                day: 'Fri',
                performers: ['Stones of the Queen\'s Age?'],
                description: 'Kick off your weekend with Stones of the Queen\'s Age on Friday 27th September.',
            },
            {
                date: 29,
                day: 'Sun',
                price: 5,
                performers: ['Passive Fix', 'Trevor\'s Head', 'Colour Blind Monks'],
                description: 'End September with performances from Passive Fix, Trevor\'s Head, and Colour Blind Monks.',
            },
            ],
        },
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
                performers: ['Aqualine', 'Fever Rouge?', 'Artroom'],
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
];

export default EventData;