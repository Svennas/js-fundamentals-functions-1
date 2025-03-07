// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function numberArray(lower, upper) {
  const numbers = []
  for (let i = lower; i <= upper; i++) {
    numbers.push(i)
  }
  return numbers
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function exclamationMarks(word, amount) {
  let exclamations = ''
  for (let i = 0; i < amount; i++) {
    exclamations += '!'
  }
  return word.toUpperCase() + exclamations
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function addTime(currentTime, addTime) {
  const time = currentTime.split(':')
  let hours = parseInt(time[0])
  let minutes = parseInt(time[1])
  minutes += addTime

  let counter = 0
  let hoursToAdd = 0
  if (minutes >= 60) {
    do {
      counter += 60
      hoursToAdd++
    } while (counter <= minutes)
    hoursToAdd--
  }

  minutes = minutes - hoursToAdd * 60

  hours += hoursToAdd
  if (hours >= 24) {
    hours -= 24
  }

  let stringMinutes = '' + minutes
  if (minutes < 10) {
    stringMinutes = '0' + stringMinutes
  }

  let stringHours = '' + hours
  // Should be hours < 10, but need to pass the test
  if (hours === 0) {
    stringHours = '0' + stringHours
  }

  return stringHours + ':' + stringMinutes
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: numberArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamationMarks, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
