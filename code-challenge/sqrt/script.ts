// مسئله: محاسبه جذر صحیح یک عدد
// صورت مسئله:
// یک عدد صحیح غیرمنفی x داده شده است. جذر صحیح آن را برگردانید (به سمت پایین گرد شود).

// نباید از توابع یا عملگرهای توان داخلی (مثل pow(x, 0.5) یا x ** 0.5) استفاده کنید.

// راه‌حل:
// برای محاسبه جذر صحیح بدون استفاده از توابع آماده، از جست‌وجوی دودویی (Binary Search) استفاده می‌کنیم:

// اگر x برابر 0 یا 1 باشد، پاسخ همان x است.

// محدوده جست‌وجو را بین 1 تا x/2 قرار می‌دهیم (چون جذر x هرگز از x/2 بزرگتر نیست).

// در هر مرحله، عدد وسط (mid) را محاسبه کرده و مربع آن را با x مقایسه می‌کنیم:

// اگر mid * mid == x، پاسخ mid است.

// اگر mid * mid < x، جست‌وجو را در نیمه راست ادامه می‌دهیم.

// اگر mid * mid > x، جست‌وجو را در نیمه چپ ادامه می‌دهیم.

// وقتی حلقه تمام شد، right بزرگترین عددی است که مربع آن کمتر یا مساوی x است.

function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid;
    } else if (square < x) {
      left = mid + 1;
      result = mid; // ذخیره آخرین مقدار معتبر
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// تست نمونه‌ها
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(16)); // 4
console.log(mySqrt(25)); // 5
