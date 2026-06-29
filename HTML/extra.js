function isPalindrome(num) {
    // Convert the number to a string
    const strNum = num.toString();  
    // Reverse the string and compare it to the original
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
}
alert("The function isPalindrome has been defined. You can use it to check if a number is a palindrome.");
// Example usage:
const number = 121;
if (isPalindrome(number)) {
    console.log(`${number} is a palindrome.`);
} else {
    console.log(`${number} is not a palindrome.`);
}

