import { NumberCollection } from "./NumberCollection"

export interface Sortable {
    length: number;
    compare(a: number, b: number): boolean;
    swap(a: number, b: number): void;
}

export abstract class Sorter {
    // constructor(public collection: Sortable) {
    // }

    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;

    sort(): void {
        // this.collection = this.collection.sort((a, b) => a - b)
        // const { length } = this.collection
        const { length } = this

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                
                // Type Guard - restore access to a set of properties in a union type
                // if (this.collection instanceof Array) {
                //     if (this.collection[j] > this.collection[j + 1]) {
                //         const temp = this.collection[j]
                //         this.collection[j] = this.collection[j + 1]
                //         this.collection[j + 1] = temp
                //     }
                // }

                // if (this.collection.compare(j, j + 1)) {
                //     this.collection.swap(j, j + 1)
                // }

                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}