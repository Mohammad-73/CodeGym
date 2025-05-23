// مسئله: طول آخرین کلمه در رشته
// صورت مسئله:
// یک رشته شامل کلمات و فاصله‌ها (' ') داده شده است. طول آخرین کلمه در این رشته را برگردانید.

// یک کلمه بزرگ‌ترین زیررشته‌ای است که فقط از کاراکترهای غیرفاصله تشکیل شده است.

// راه‌حل:
// برای پیدا کردن طول آخرین کلمه:

// از انتهای رشته شروع می‌کنیم و تمام فاصله‌های انتهایی را نادیده می‌گیریم.

// سپس کاراکترهای غیرفاصله را تا رسیدن به فاصله بعدی یا ابتدای رشته می‌شماریم.

function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  // نادیده گرفتن فاصله‌های انتهایی
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // شمارش کاراکترهای آخرین کلمه
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
}

// تست نمونه‌ها
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
