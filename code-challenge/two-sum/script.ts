// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// با توجه به آرایه‌ای از اعداد صحیح nums و یک عدد صحیح target، اندیس‌های دو عدد را طوری برگردانید که مجموع آنها برابر با target شود.

// می‌توانید فرض کنید که هر ورودی دقیقاً یک جواب دارد و نمی‌توانید از یک عنصر دو بار استفاده کنید.

// می‌توانید جواب را به هر ترتیبی برگردانید.

function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    // Calculate the complement needed to reach the target
    const complement = target - currentNum;

    // Check if we've already seen the complement
    if (numMap.has(complement)) {
      // Return the indices if found
      return [numMap.get(complement)!, i];
    }

    // Store the current number and its index in the map
    numMap.set(currentNum, i);
  }

  // Although problem states there's exactly one solution, we return empty array if not found
  return [];
}

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
