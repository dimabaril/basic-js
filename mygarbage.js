function sortByHeight(arr) {
  let filteredBackwardSortedArr = arr
    .filter((item) => item !== -1)
    .sort((a, b) => b - a);
  console.log(filteredBackwardSortedArr);

  result = arr.map((item) =>
    item === -1 ? -1 : filteredBackwardSortedArr.pop()
  );
  return result;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
