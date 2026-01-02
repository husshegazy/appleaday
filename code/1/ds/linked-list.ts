class Node {
    public val: number
    public next: Node | null

    constructor(val: number, next: Node | null = null) {
        this.next = next;
        this.val = val
    }
}

export class LinkedList {
    private head: Node
    private tail: Node

    constructor() {
        this.head = new Node(-1);
        this.tail = this.head;
    }

    get(i: number) {
        let y = 0;
        let curr = this.head.next;
        while (curr) {
            if (y === i) {
                return curr.val;
            }
            y++;
            curr = curr.next;
        }
        return -1;
    }

    insertHead(i: number) {
        const newHead = new Node(i);
        newHead.next = this.head.next;
        this.head.next = newHead;


        if (newHead.next == null) {
            this.tail = newHead;
        }
    }

    insertTail(i) {
        this.tail.next = new Node(i, null);
        this.tail = this.tail.next;
    }

    remove(i: number) {
        let y = 0;
        let curr: Node = this.head;

        while (y < i && curr && curr.next) {
            y++;
            curr = curr.next;
        }

        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;
            }

            curr.next = curr.next.next;
            return true;
        }

        return false;
    }

    getValues() {
        let result: number[] = [];
        let curr = this.head.next;

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result
    }
}