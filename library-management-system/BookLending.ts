export class BookLending {
	private _lendingDate: Date;
	private _dueDate: Date
	private _returnDate: Date;
	constructor(private userId: string, private _bookItemUid: string) {
		this._lendingDate = new Date();

		const dueDate = new Date()
		dueDate.setDate(dueDate.getDate() + 7);
		this._dueDate = dueDate;

		this._lendingDate = new Date();
	}

	public get bookItemUid(): string{ 
		return this._bookItemUid;
	}
	public updateReturnDate(returnDate: Date){
		this._returnDate = returnDate;
	}
}

export class BookLendingStore {
	private static lendings: BookLending[];
	static lendBook(lending: BookLending): boolean {
		const result = BookLendingStore.getLendingInfoByBookItemUid(lending.bookItemUid)
		if(result != null) {
			return false
		}
		BookLendingStore.lendings.push(lending)
		return true
	}

	static returnBook(bookLending: BookLending): boolean {
		return true
	}

	static getLendingInfoByBookItemUid(bookItemUid: string): BookLending {
		return null
	}
}
  