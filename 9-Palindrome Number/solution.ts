
function isPalindrome(x: number): boolean {
    // A negative number or a number that ends in 0 (but is not 0 itself) cannot be a palindrome.
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false;
    }
    let reversedHalf = 0;
    while (reversedHalf < x) {
        // Get the last digit of the number and add it to the reversed half.
        reversedHalf = reversedHalf * 10 + (x % 10);
        // Remove the last digit from the original number.
        x = Math.floor(x / 10);
    }
    // Check if the number is a palindrome considering both even and odd lengths.
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}