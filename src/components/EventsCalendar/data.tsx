import { EventDataType } from "./types";


const EventData: EventDataType[] = [
	{
		month: 'January',
		performances: [
			{
				date: 11,
				day: 'Sat',
				performers: ['Brobed Stils'],
				description: 'Brodie & The Boys are back playing their classic repertoire for you entertainment.',
			},
			{
				date: 12,
				day: 'Sun',
				performers: ['Skunkworm', 'White Noise Machine', 'Vinyl'],
				price: 5,
				description: 'A triple bill of chaotic rock music',
			},
			{
				date: 19,
				day: 'Sun',
				performers: ['Goodbye Andy', 'Benchwarmer', 'Coast'],
				price: 5,
				description: 'Goodbye Andy are among the best new local bands. Support from Benchwarmer, and Coast.',
			},
			{
				date: 26,
				day: 'Sun',
				performers: ['Puma Theory', 'Bad Mouth', 'White Label'],
				price: 5,
				description: 'Triple bill of brilliant rock music.',
			},
			{
				date: 31,
				day: 'Fri',
				performers: ['Simon Hitchenson'],
				description: 'Simon is back again with his awesome loop pedalling party bangers!',
			},
		],
	},
	{
		month: 'February',
		performances: [
			{
				date: 2,
				day: 'Sun',
				performers: ['Van Quan', 'Benchy & The Gazers', 'Pink Walrus'],
				description: 'The epic Van Quan supported by Benchy & The Gazers, and Pink Walrus',
			},
			{
				date: 9,
				day: 'Sun',
				performers: ['Ross Harding', 'The Bluepers', 'VibraCore'],
				price: 5,
				description: 'Blues rock is the order of the hour. Be sure to get down.',
			},
			{
				date: 16,
				day: 'Sun',
				performers: ['Lugnut', 'Suburban Sound Machine', 'Paradise Taxi'],
				price: 5,
				description: 'The weird and wonderful Lugnut boys are back in town.',
			},
			{
				date: 23,
				day: 'Sun',
				performers: ['Samuel Ashton & The Instincts', "& Special Guests"],
				price: 6,
				description: 'The world class soul & blues man with his beautiful tones and wonderful band are back in farnham',
			},
			{
				date: 28,
				day: 'Fri',
				performers: ['The Replays'],
				description: 'The Replays duo consists of Jack & Joe with classic tunes you know and love!',
			},
		],
	},
];

export default EventData;