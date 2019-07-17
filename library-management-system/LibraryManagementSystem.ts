import { User } from "./User";
import { Book, BookItemImpl } from "./BookItem";

class LibraryManagementSystem {
	private currentUser: User;

	login(user: User) {
		this.currentUser = user;
	}

	borrow(book: Book) {
		this.currentUser.borrowBookItem(book)
	}

	returnBook(book: Book) {
		this.currentUser.returnBookItem(new BookItemImpl(book))
	}
}