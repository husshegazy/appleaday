import { expect, test } from "bun:test";
import { hasDuplicate } from "../has-duplicate";

test("dynamic array test", () => {
    expect(hasDuplicate([1, 2, 3, 3])).toBeTrue();
    expect(hasDuplicate([1, 2, 3, 4])).toBeFalse();
})

