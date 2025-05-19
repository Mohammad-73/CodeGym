// مسئله: جمع دو رشته باینری
// صورت مسئله:
// دو رشته باینری (a و b) داده شده‌اند. جمع این دو را به صورت یک رشته باینری برگردانید.

// راه‌حل:
// برای جمع دو عدد باینری، مشابه جمع اعشاری عمل می‌کنیم، اما با پایه ۲:

// دو رشته را از انتها به ابتدا بررسی می‌کنیم.

// رقم‌های متناظر را به همراه رقم انتقال (carry) جمع می‌زنیم.

// اگر مجموع رقم‌ها >= 2 باشد، رقم انتقال را برای مرحله بعد محاسبه می‌کنیم.

// نتیجه نهایی را معکوس می‌کنیم، چون ارقام را از انتها جمع زده‌ایم.

function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    const digitA = i >= 0 ? parseInt(a[i--]) : 0;
    const digitB = j >= 0 ? parseInt(b[j--]) : 0;
    const sum = digitA + digitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}

// تست نمونه‌ها
console.log(addBinary("11", "1")); // "100"
console.log(addBinary("1010", "1011")); // "10101"
