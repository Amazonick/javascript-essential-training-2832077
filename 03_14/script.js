/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */
import Book from './Book.js';
import Backpack from './Backpack.js';

const everydayPack = new Backpack(
	'Everyday Backpack',
	30,
	'grey',
	15,
	26,
	26,
	false,
	'December 5, 2018 15:00:00 PST'
);

const everyDayBook = new Book(
	'The Three-Body Problem',
	'Liu Cixin',
	'Science-Fiction',
	'Paperback',
	380,
	'December 5, 2008 15:00:00 PST'
);

console.log('The everydayPack object:', everydayPack);
console.log('The pocketNum value:', everydayPack.pocketNum);
console.log('Days since aquired:', everydayPack.backpackAge());
console.log('Packed Book:', everyDayBook);
console.log('Genre:', everyDayBook.genre);
console.log('Years since release:', everyDayBook.bookAge());
