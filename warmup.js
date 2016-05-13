//=====================Warm ups
function isPalindrome(str) {
  if(str.length <= 1) {
    return true;
  }
  // console.log(str);
  if(str[0] === str[str.length-1]) {
    return isPalindrome(str.substr(1, str.length-2));
  }
  return false;
}

console.log(isPalindrome('racecar'));

function reverseString(str) {
  if(!str.length) {
    return '';
  }
  return str[str.length-1] + reverseString(str.slice(0, str.length-1));
}
console.log('reverseString: ', reverseString('christopher'));


























