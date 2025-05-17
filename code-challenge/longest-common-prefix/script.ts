// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * Finds the longest common prefix among an array of strings.
 * @param strs - Array of strings to compare
 * @returns The longest common prefix string
 */
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  // Start with the first string as the initial prefix candidate
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    // Compare the current prefix with each string
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix by one character from the end
      prefix = prefix.substring(0, prefix.length - 1);

      // If prefix becomes empty, return immediately
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // "inters"
console.log(longestCommonPrefix([""])); // ""
console.log(longestCommonPrefix(["apple"])); // "apple"
