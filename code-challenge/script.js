/**
 * Counts the number of occurrences of each character in a given string,
 * ignoring all spaces.
 *
 * The function returns an object where each key is a character from the string,
 * and each value is the total number of times that character appears.
 *
 * @param {string} string - The input string to analyze.
 * @returns {void} - Logs the character count object to the console.
 */
// function charCount(string) {
//   const cleaned = string.replace(/\s/g, ""); // Remove all spaces
//   const arr = cleaned.split("");
//   let counter = {};
//   for (let i = 0; i < arr.length; i++) {
//     const char = arr[i];
//     if (counter[char]) {
//       counter[char]++;
//     } else {
//       counter[char] = 1;
//     }
//   }
//   console.log(counter);
// }
// charCount("hello world");

/**
 * Logs numbers from 1 to 10 in the console, one number per second.
 *
 * The function uses setTimeout to delay each number's output,
 * creating a sequential countdown effect from 1 to 10, with each number
 * printed after a delay equal to its value in seconds.
 *
 * @returns {void}
 */
// function logNumbersWithDelay() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// logNumbersWithDelay();
