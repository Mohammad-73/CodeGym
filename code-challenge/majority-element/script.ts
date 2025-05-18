// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// ✅ صورت مسئله:
// آرایه‌ای از اعداد داریم با اندازه n.

// عنصر اکثریت (majority) عنصری است که بیش از n / 2 بار تکرار شده است.

// فرض بر این است که همیشه یک عنصر اکثریت وجود دارد.

// خروجی باید همان عنصر اکثریت باشد.

// 🧠 روش حل با Boyer-Moore:
// ایده اصلی:
// یک شمارنده (count) و یک کاندید (candidate) نگه می‌داریم.

// اگر شمارنده صفر باشد، مقدار جدیدی را به عنوان کاندید انتخاب می‌کنیم.

// اگر مقدار فعلی برابر با کاندید باشد، شمارنده را افزایش می‌دهیم.

// اگر برابر نبود، شمارنده را کاهش می‌دهیم.

// در پایان، مقدار کاندید، عنصر اکثریت خواهد بود.

function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate: number | null = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate!;
}

const majorityNums = [2, 2, 1, 1, 1, 2, 2];
const result = majorityElement(majorityNums);
console.log(result); // خروجی: 2
