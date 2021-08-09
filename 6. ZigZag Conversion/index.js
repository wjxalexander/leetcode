var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const ret = Array.from({ length: numRows }, () => "");
  let i = 0;
  let j = 0;
  for (let k = 0; k < s.length; k++) {
    ret[i] += s[k];
    if (i < numRows - 1 && j === 0) {
      // down
      i++;
      continue;
    } else if (i === numRows - 1) {
      // at bottom
      j = i - 1;
      i--;
    } else {
      // increase
      j--;
      i--;
    }
  }

  return ret.join("");
};
