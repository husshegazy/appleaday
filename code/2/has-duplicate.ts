

export function hasDuplicate(nums: number[]) {
    const vals = new Set(nums);
    console.log(vals);
    if (vals.size === nums.length) {
        return false;
    }

    return true;
}