// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside
// the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements
// denote the elements that should be merged, and the last n elements are set to 0 and should be
// ignored. nums2 has a length of n.

// به شما دو آرایه عدد صحیح nums1 و nums2 داده می شود که به ترتیب غیر کاهشی مرتب شده اند
// و دو عدد صحیح m و n به ترتیب نشان دهنده تعداد عناصر در nums1 و nums2 هستند.

// nums1 و nums2 را در یک آرایه واحد که به ترتیب غیر کاهشی مرتب شده اند ادغام کنید.

// آرایه مرتب شده نهایی نباید توسط تابع برگردانده شود، بلکه باید در داخل آرایه nums1 ذخیره شود.
// برای تطبیق با این موضوع، nums1 دارای طول m + n است، که در آن اولین عناصر m نشان دهنده عناصری است که
// باید ادغام شوند و n عنصر آخر روی 0 تنظیم شده و باید نادیده گرفته شوند. nums2 دارای طول n است.

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]; // Move larger number to the back
      i--;
    } else {
      nums1[k] = nums2[j]; // Place nums2's number
      j--;
    }
    k--;
  }

  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
