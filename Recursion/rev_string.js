let newSring = ''
function revString(s) {
  if (s.length == 1) {
    return s
  }
  else {
    // console.log(s[s.length - 1])
    return s[s.length - 1] + revString(s.slice(0, s.length - 1))

  }
}
console.log(revString("hello"))