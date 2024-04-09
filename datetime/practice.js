


//Check if the input is a date object
var isDate = function(input)
{
    // if(Object.prototype.toString.call(input) == "[object Date]")
    // {
    //     return true;
    // }

    if(typeof(input) == "date")
    {
        return "str"
    }
}

console.log(isDate(new Date()))