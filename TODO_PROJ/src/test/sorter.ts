interface Sortable {
	length: number;
	compare(leftIndex: number, rightIndex: number): boolean;
	swap(leftIndex: number, rightIndex: number): void;
}

export class Jsorter {
	constructor(private _collection: Sortable) {} // 덕타이핑

	get collection() {
		return this._collection;
	}

	sort(): void {
		const {length} = this._collection;

		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// Guard
				if (this._collection.compare(j, j + 1)) {
					this._collection.swap(j, j + 1);
				}
			}
		}
	}

	printCollection(): void {
		console.log(this.collection);
	}
}

// let data: string | number[];
// function isString(data: string | number[]): data is string {
// 	return (<string>data).split !== undefined;
// }

// data = 'TypeScript';
// if (isString(data)) {
// 	data.split('');
// } else {
// 	// number[]
// }
