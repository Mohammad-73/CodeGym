function removeElement(nums: number[], val: number): number {
  let k = 0; // Pointer for the new array position

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i]; // Copy the non-val element forward
      k++;
    }
  }

  return k;
}
