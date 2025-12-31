import { expect, test } from "bun:test";
import { DynamicArray } from "../dynamic-array";

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
