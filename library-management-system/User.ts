import { BookItem } from "./BookItem";

interface User {
	checkoutBookItem(bookItem: BookItem): boolean

	returnBookItem(bookItem: BookItem): boolean
}

export class UserImpl {
	constructor(private id: string) {

	}
	public checkoutBookItem(bookItem: BookItem): boolean {
		return bookItem.checkout(this.id)
	}

	public returnBookItem(bookItem: BookItem): boolean {
		bookItem.updateBookItemStatus(BookStatus.AVAILABLE);

		return true
	}
}