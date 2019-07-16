import { BookLending, BookLendingStore } from "./BookLending";

export interface BookItem {
	updateBookItemStatus(status: BookStatus); 
	checkout(userId: string): boolean;
}
export class BookItemImpl implements BookItem {
	private bookItemUid: string;
	private bookStatus: BookStatus;
	private lendingHistory: BookLending[];

	updateBookItemStatus(status: BookStatus){

	}

	checkout(userId: string): boolean {
		const bookLending = new BookLending(userId, this.bookItemUid);
		this.lendingHistory.push(bookLending)
		this.bookStatus = BookStatus.LENDING;

		return BookLendingStore.lendBook(bookLending);
	}
}