// مسئله: جست‌وجو یا درج موقعیت در آرایه مرتب
// صورت مسئله:
// یک آرایه مرتب از اعداد متمایز و یک مقدار هدف (target) داده شده است.

// اگر target در آرایه وجود داشت، اندیس آن را برگردانید.

// اگر وجود نداشت، اندیسی که target باید در آن درج شود تا آرایه همچنان مرتب بماند را برگردانید.

// الگوریتم باید با زمان اجرای O(log n) پیاده‌سازی شود.

// راه‌حل:
// برای دستیابی به O(log n) از جست‌وجوی دودویی (Binary Search) استفاده می‌کنیم:

// دو نشانگر (left و right) تعریف می‌کنیم که ابتدا به ابتدا و انتهای آرایه اشاره می‌کنند.

// در هر مرحله، وسط محدوده (mid) را محاسبه کرده و مقایسه می‌کنیم:

// اگر nums[mid] == target، اندیس mid را برمی‌گردانیم.

// اگر nums[mid] < target، جست‌وجو را در نیمه راست ادامه می‌دهیم (left = mid + 1).

// اگر nums[mid] > target، جست‌وجو را در نیمه چپ ادامه می‌دهیم (right = mid - 1).

// اگر حلقه تمام شد و target پیدا نشد، left نشان‌دهنده اندیس درج است.

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// تست نمونه‌ها
console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
