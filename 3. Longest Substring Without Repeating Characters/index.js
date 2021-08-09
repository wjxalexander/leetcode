var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let i = 0;
  let j = 0;
  let ret = 0;
  while (i < s.length && j < s.length) {
    set.add(s[j]);
    if (set.size === j - i + 1) {
      ret = Math.max(ret, j - i + 1);
      j++;
    } else {
      set.clear(); // here slow
      i++;
      j = i;
    }
  }
  return ret;
};
/**
 * The reason is that if s[j]s[j] have a duplicate in the range [i, j)[i,j) with index j'j 
′
 , we don't need to increase i little by little. We can skip all the elements in the range [i, j'][i,j 
′
 ] and let ii to be j' + 1j 
′
 +1 directly.
 * 
 */
var lengthOfLongestSubstring_2 = function (s) {
  let set = new Set();
  let n = s.length;
  let max = 0;
  i = 0;
  j = 0;
  while (i < n && j < n) {
    if (!set.has(s[j])) {
      set.add(s[j++]);
      max = Math.max(max, j - i);
    } else {
      set.delete(s[i++]); // j do not need reset it still contain the duplicate element
    }
  }
  return max;
};
lengthOfLongestSubstring("dvdf");
