






function isPalindrome(str)
{
    if(typeof(str) !== 'string')
    {
        return "Accept string only!";
    }

    if(str.length == 1)
    {
        return true;
    }

    if(str[0] !== str[str.length - 1])
    {
        return false;
    }

    return isPalindrome(str.slice(1, str.length - 1))
}

console.log(isPalindrome("m"))