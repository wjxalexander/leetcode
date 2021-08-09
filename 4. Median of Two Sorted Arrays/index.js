// o(m+n) merge sort conque step
var findMedianSortedArrays = function (nums1, nums2) {
  const totalLen = nums1.length + nums2.length;
  const mergedSort = [];
  let i = 0;
  let j = 0;

  const _checkMergeSort = () => {
    const mergeLen = mergedSort.length;
    if (totalLen % 2 === 0 && mergeLen === totalLen / 2 + 1) {
      const halfVal = mergedSort[mergeLen - 1] + mergedSort[mergeLen - 2];
      return (halfVal / 2).toFixed(1);
    }
    if (totalLen % 2 === 1 && mergeLen === (totalLen + 1) / 2) {
      return mergedSort[mergeLen - 1].toFixed(1);
    }
    return false;
  };

  while (i < nums1.length && j < nums2.length) {
    const leftEle = nums1[i];
    const rightEle = nums2[j];
    if (leftEle < rightEle) {
      i++;
      mergedSort.push(leftEle);
    } else {
      j++;
      mergedSort.push(rightEle);
    }
    const curRet = _checkMergeSort();
    if (curRet !== false) {
      return curRet;
    }
  }
  while (i < nums1.length) {
    mergedSort.push(nums1[i++]);
    const curRet = _checkMergeSort();
    if (curRet !== false) {
      return curRet;
    }
  }
  while (j < nums2.length) {
    mergedSort.push(nums2[j++]);
    const curRet = _checkMergeSort();
    if (curRet !== false) {
      return curRet;
    }
  }
};
