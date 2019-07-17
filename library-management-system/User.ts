import { BookItem } from "./BookItem";

export interface User {
	borrowBookItem(bookItem: BookItem): boolean

	returnBookItem(bookItem: BookItem): boolean
}

export class UserImpl {
	private totalCount: number = 0
	constructor(private id: string) {

	}
	public borrowBookItem(bookItem: BookItem): boolean {
		this.totalCount++;
		return bookItem.borrow(this.id)
	}

	public returnBookItem(bookItem: BookItem): boolean {
		bookItem.returnBook(bookItem.bookItemUid)
		this.totalCount++;
		return true
	}
}