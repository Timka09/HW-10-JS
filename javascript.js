// Task 1
function greatings() {
  const saveClick = confirm("confirm me")
  if (saveClick === true) {
    alert("hello world")
  } else {
    alert("plese try again")
  }
}
greatings()
// Task 2
const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)
const personAnswer = Number(prompt("guess number from 1 to 100"))

function checkRightAnswer() {
    if (personAnswer === randomNumber) {
        alert("U won")
    } else {
        alert("Try again")
    }

}
checkRightAnswer()
// Task 3
let res = 0;
function infinityClick() {
  while (true) {
    const plusClick = confirm("Click me");
    if (plusClick) {
      res++;
      console.log(`U clicked ${res}`);
    } else {
      console.log("click me again");
      break;
    }
  }
}
infinityClick();
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