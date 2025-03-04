const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';



// Function to generate a random lowercase string with a given length
function getRandomLowerCase(length = 6) {
  let resultLower = '';
  for(i = 0; i < length; i++) {1
    resultLower += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  }   
  return resultLower;
}

// Function to generate a random uppercase string with a given length

function getRandomUpperCase(length = 6) {
  let resultUpper = '';
  for (i = 0; i < length; i++) {
    resultUpper += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  }
     return resultUpper;
}


// Function to generate a random number with a given length
function getRandomNumber(length = 3) {
  let resultNumber = '';
  for (i = 0; i < length; i++) {
    resultNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
    
  
  return resultNumber;
}

// Function to generate a random string and convert it to an array

function generateRandomness(lower, upper, number) {
  let arrayStr = number + upper + lower;
  let passArr = arrayStr.split('');
  
  return passArr;
}

// Function to shuffle the array
function shuffleArray(passArr) {
  for (let i = passArr.length - 1; i >= 1; i--) {
    const shuffResult = Math.floor(Math.random() * (i + 1));
    [passArr[i], passArr[shuffResult]] = [passArr[shuffResult], passArr[i]];
  }
  
  return passArr;
}

// Call the functions
const lower = getRandomLowerCase();
const upper = getRandomUpperCase();
const number = getRandomNumber();
const passwordArray = generateRandomness(lower, upper, number);
const shuffledArray = shuffleArray(passwordArray);
const finalResult = shuffledArray.join('');

// Output the result

console.log(finalResult);

