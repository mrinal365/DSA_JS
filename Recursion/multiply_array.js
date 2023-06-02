function multiply(arr) {
    if (arr.length <= 0) {
      return 1;
    }
    return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1))
  }
  
const result = multiply([8, 3, 4, 1, 1, 1])
console.log(result)
  