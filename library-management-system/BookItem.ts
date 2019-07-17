import { BookLending, BookLendingStore } from "./BookLending";
import { BookStatus } from "./BookStatus";

export abstract class Book {
	constructor(public title: string, public authors: string[], public ISBN: string) {}
}

export interface BookItem {
	returnBook(bookItemUid: string): boolean;
	borrow(userId: string): boolean;
	bookItemUid: string;
}
export class BookItemImpl extends Book implements BookItem {
	private bookStatus: BookStatus;
	private lendingHistory: BookLending[];

	constructor(public title: string, public authors: string[], public ISBN: string, public bookItemUid: string) {
		super(title, authors, ISBN)
	}

	borrow(userId: string): boolean {
		if(this.bookStatus !== BookStatus.AVAILABLE) {
			return false
		}

		const bookLending = new BookLending(userId, this.bookItemUid);
		this.lendingHistory.push(bookLending)
		this.bookStatus = BookStatus.LENDING;

		return BookLendingStore.lendBook(bookLending);
	}

	returnBook(bookItemUid: string): boolean {
		if(this.bookStatus !== BookStatus.AVAILABLE) {
			return false
		}

		this.bookStatus = BookStatus.AVAILABLE;
		const lending = BookLendingStore.getLendingInfoByBookItemUid(bookItemUid)

		return BookLendingStore.returnBook(lending);
	}
}