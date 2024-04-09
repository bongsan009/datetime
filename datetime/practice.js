


//Check if the input is a date object
var isDate = function(input)
{
 

    if(Object.prototype.toString.call(input) == "[object Date]")
        return true;

    return false

}

//Test the function
console.log(isDate(new Date()))
console.log(isDate("text"));
console.log(isDate(true));