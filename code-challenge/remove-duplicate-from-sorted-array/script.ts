// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// برای حل این مسئله با TypeScript، ابتدا نیاز داریم:

// آرایه را به صورت درجا (in-place) تغییر دهیم، یعنی از آرایه‌ی جدید استفاده نکنیم.

// تمام عناصر تکراری را حذف کنیم و فقط مقادیر یکتا را نگه داریم.

// ترتیب اصلی عناصر را حفظ کنیم.

// در نهایت تعداد عناصر یکتا (k) را برگردانیم.

// از یک اشاره‌گر (index) برای جایگذاری مقادیر یکتا استفاده می‌کنیم:

// اگر عنصر فعلی با عنصر قبلی متفاوت باشد، آن را در موقعیت اشاره‌گر قرار می‌دهیم.

// سپس اشاره‌گر را افزایش می‌دهیم.

// در نهایت مقدار اشاره‌گر برابر با تعداد مقادیر یکتا (k) خواهد بود.

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let k = 1; // index for placing unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // move unique element to the k-th position
      k++;
    }
  }

  return k;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(nums);
console.log(k); // خروجی: 5
console.log(nums.slice(0, k)); // خروجی: [0, 1, 2, 3, 4]
