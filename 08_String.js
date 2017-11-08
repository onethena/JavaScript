
var string = "/* Vandana Sharma */ ";
// Remove all symbols and uderscore
string = string.replace(/[\W_]/g, "");
console.log(string);
//Reverse and join
string = string.split("").reverse().join("");
console.log(string);

// Find whether the given word is palindrome
function isPalindrome(string)
{
    // in one line 
    if(string.replace(/[\W_]/g, "") == string.replace(/[\W_]/g, "").split("").reverse().join(""))
    {
        console.log(true);
    }

    else
        console.log(false);
};

isPalindrome("level");
isPalindrome("re_fer");
isPalindrome("Vandana");