import { expect, test } from "bun:test";
import { DynamicArray } from "../dynamic-array";
import { LinkedList } from "../linked-list";

test("dynamic array test", () => {
    const a = new DynamicArray(10);

    expect(a.get(0)).toBe(0);
    expect(a.getCapacity()).toBe(10);
    expect(a.getSize()).toBe(0);

    a.set(0, 12);
    expect(a.get(0)).toBe(12);


    for (let i = 0; i < a.getCapacity(); i++) {
        a.pushback(17);
    }

    a.pushback(17);
    expect(a.getSize()).toBe(11);
    expect(a.getCapacity()).toBe(20);
})

test("Linked List", () => {
    let a = new LinkedList();

    expect(a.getValues()).toEqual([]);
    a.insertHead(3);
    expect(a.getValues()).toEqual([3]);

    let b = new LinkedList();
    expect(b.getValues()).toEqual([]);
    b.insertTail(3);
    expect(b.getValues()).toEqual([3]);
    b.insertHead(4);
    expect(b.getValues()).toEqual([4, 3]);
    b.insertTail(2);
    b.insertTail(1);
    expect(b.getValues()).toEqual([4, 3, 2, 1]);

    b.remove(0);
    expect(b.getValues()).toEqual([3, 2, 1]);

    const c = b.get(0);
    expect(c).toBe(3);
})

