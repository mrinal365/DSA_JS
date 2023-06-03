function range(start, end) {
    if (start > end) {
      return []
    }
    else {
      // console.log(end)
      // console.log(start)
      const array = range(start + 1, end)
      // console.log(end,"end")
      // console.log(array)
      array.push(start)
      // console.log(array)
      return array
    }
  }
  
  const res = range(1, 8)
  console.log(res)