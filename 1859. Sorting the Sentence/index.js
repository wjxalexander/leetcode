var sortSentence = function (s) {
  return s
    .split(" ")
    .sort(customSort)
    .map((a) => a.substring(0, a.length - 1))
    .join(" ");
};
const customSort = (a, b) => {
  return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
};
