var trap = function (height) {
  const stack = [];
  let ret = 0;
  let leftSign = false;
  let rightSign = false;
  for (let i = 0; i < height.length; i++) {
    if (stack.length === 0 && height[i] === 0) {
      continue;
    }
    stack.push(height[i]);
    if (stack.length >= 2) {
      if (stack[stack.length - 1] < stack[0]) {
        leftSign = true;
      } else {
        rightSign = true;
      }
    }

    if (leftSign && rightSign) {
      ret += calcCurrentVolume(stack);
      stack.length = 0;
      stack.push(height[i]);
      leftSign = false;
      rightSign = false;
    }
  }
  ret += calcCurrentVolume(stack);
  return ret;
};
var calcCurrentVolume = function (stack) {
  let cur = 0;
  const shorter = Math.min(stack[0], stack[stack.length - 1]);
  for (let i = 1; i < stack.length - 1; i++) {
    cur += shorter - stack[i] > 0 ? shorter - stack[i] : 0;
  }
  return cur;
};
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
