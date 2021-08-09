// Failed
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  let i = 0;
  while (i < nums1.length) {
    if (nums1[i] > nums2[i]) {
      i++;
      continue;
    }
    let j = i;
    while (j < nums1.length) {
      if (nums1[j] > nums2[i]) {
        break;
      }
      j++;
    }
    if (j === i || j === nums1.length) {
      return nums1;
    } else {
      const temp = nums1[i];
      nums1[i] = nums1[j];
      nums1[j] = temp;
    }
    i++;
  }
  return nums1;
};
const nums1 = [9, 1, 2, 4, 5];
const nums2 = [6, 2, 9, 1, 4];

const ret = advantageCount(nums1, nums2);
console.log(ret);
