export class DynamicArray {

    private array: number[]
    private capacity: number
    private length: number

    constructor(capacity: number) {
        this.array = new Array(capacity).fill(0);
        this.length = 0;
        this.capacity = capacity
    }

    get(i: number) {
        return this.array[i];
    }

    set(i: number, n: number) {
        this.array[i] = n
    }

    pushback(n: number) {
        if (this.capacity == this.length) {
            this.resize();
        }
        this.set(this.length, n);
        this.length++;
    }

    popback() {
        if (this.length > 0) {
            this.length--;
        }
        return this.array[this.capacity];
    }

    resize() {
        const newArray = new Array(this.capacity * 2).fill(0);
        for (let i = 0; i < this.capacity; i++) {
            newArray[i] = this.array[i]
        }
        this.array = newArray;
        this.capacity = this.capacity * 2
    }

    getSize() {
        return this.length
    }

    getCapacity() {
        return this.capacity
    }
}
