// Given an integer x, return true if x is a palindrome, and false otherwise.

// با توجه به عدد صحیح x، اگر x زوج یا زوج‌های دوسر باشد مقدار true و در غیر این صورت مقدار false را برمی‌گرداند.

/**
 * Checks if a number is a palindrome (reads the same forwards and backwards).
 * @param x - The number to check
 * @returns True if the number is a palindrome, false otherwise
 */
function isPalindrome(x: number): boolean {
  // Negative numbers cannot be palindromes
  if (x < 0) return false;

  // Single digit numbers are always palindromes
  if (x < 10) return true;

  // Convert the number to a string for easy comparison
  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  // Compare characters moving from both ends towards the center
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true

function isPalindromeWithoutConvertToString(x: number): boolean {
  if (x < 0) return false;
  if (x < 10) return true;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}
