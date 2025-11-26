function fakeBin(x){
  let nums = x.split("")
  let bin = ""
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= 5) {
        bin += "1"
      } else {
        bin += "0"
      }
    }
  return bin
}