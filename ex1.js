// 1). Write a program function to check whether an input is an array or not

function isArray(input)
{
    if(Array.isArray(input))
    {
        return true;
    }else
    {
        return false;
    }
}

// Test the function


// 2). Write a program to clone an array.

function clone(arr)
{
    return Array.from(arr);
}

let x = [10, 20, 30, 40];
let y = clone(x)

// console.log("Original array :: " + x);
// console.log("Clone array    :: " + y)

// 3). Write a program function to get the first element from array.

function getTheFirstItem(arr, n)
{
    if(!arr?.length) //If the array is empty.
    {
        return [];
    }

    if(n == null) //If the second param is omit or leave out
    {
        return (arr)
    }

    if(n > arr.length)
    {
        return (arr);
    }else
    {
        return arr.slice(0,n);
    }
}

// console.log(getTheFirstItem([10,20,30, 40, 50], 4))


// 4). Write a program function to get the first element from array.

function getTheLastItem(arr, n)
{
    if(arr.length == 0)
    {
        return [];
    }

    if(n == null) //If n equal to null return the last item.
    {
        return arr[arr.length - 1]
    }

    if(n > arr.length)
    {
        return arr[0];
    }else
    {
        return array.slice(Math.max(array.length - n, 0));
    }
}




const person = {
    firstName : "Oeun",
    lastName : "Bunsan",
    age : 30,

    fullName : function()
    {
        return (this.firstName + " " + this.lastName)
    }
}

const member = 
{
    firsName : "Ling",
    lastName  : "Slinge"
}





class Stack
{
    constructor()
    {
        this.items = new Array();
    }

    //Add an item onto the stack
    push(element)
    {
        this.items.push(element);
    }

    pop()
    {
        if(this.items.length == 0)
        {
            return "Underflow";
        }

        return this.items.pop()
    }
}