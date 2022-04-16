class Book {
	constructor(name, author, genre, cover, pages, releaseDate) {
		this.name = name;
		this.author = author;
		this.genre = genre;
		this.cover = cover;
		this.pages = pages;
		this.releaseDate = releaseDate;
	}
	bookAge() {
		let now = new Date();
		let released = new Date(this.releaseDate);
		let age = now - released;
		let yearsSinceRelease = Math.floor(age / (1000 * 3600 * 24 * 365));
		return yearsSinceRelease;
	}
}

export default Book;
