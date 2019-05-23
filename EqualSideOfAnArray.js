const findEvenIndex = (arr) => {
  let sum = 0
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i]

  if (sum2 === sum) {
    return i;
  }

  sum2 += arr[i]
}

  return -1;
}
