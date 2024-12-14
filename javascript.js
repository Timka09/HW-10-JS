// Task 4
const arr = [2, 3, 4, 5];
function applyCallbackToEachElement(arr, callback) {
  let newArr = [] 
  for (let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i]))
  }
  return newArr
}

function squareCallback(arr) {
  return arr * arr
}

console.log(applyCallbackToEachElement(arr,squareCallback))


// Task 5

function calculateDiscountedPrice(price, discount, callback) {
  const calculation = (price / 100 * discount)
  const calculationSale = price - calculation
  return callback(calculationSale)
}

function showDiscountedPrice(calculationSale) {
  let returnMessege = `Ваша дисконтна ціна дорівнює ${calculationSale}`
  return returnMessege
}

console.log(calculateDiscountedPrice(100,10,showDiscountedPrice))