

function range(start, end)
{
    if(end - start == 2)
    {
        return [start + 1];
    }

    let list = range(start, end - 1);
    list.push(end - 1);

    return (list)
}





function getRangeIntegers(x, y, rs = new Array())
{
    if(x >= y - 1)
    {
        return rs;
    };

    rs.push(x + 1);
    return getRangeIntegers(x + 1, y, rs)
}


// list = (1, 5);




let arr = [10, 20, 30, 40, 50]; // total :: 150



//Imagin this is a magic box.
function sum(arr, idx = 0)
{

    if(arr.length <= idx)
    {
        return 0;
    }

    
    return arr[idx]  + sum(arr, idx + 1);
}

//Sample : range(1, 5);





var fibonacci_series = function (n) {
    // Base case: if n is less than or equal to 1, return the base series [0, 1].
    if (n == 1) {
      return [0, 1];
    } else {
      // Recursive case: generate the Fibonacci series up to (n - 1).
      var s = fibonacci_series(n - 1);
      // Calculate the next term in the series and push it to the array.
      s.push(s[s.length - 1] + s[s.length - 2]);
      // Return the updated Fibonacci series up to the specified length.
      return s.slice(0, n);
    }
  };


//fib(5) = [0,1,1,2,3]
//fib(4) = [0,1,1,2,3]
//fib(3) = [0,1,1,2]
//fib(2) = [0,1,1]
//fib(1) = [0,1]








const list = 
[
    "as usual",
    "back up",
    "be cut out for",
    "catch on",
    "for ages",
    "hand over",
    "serve one right",
    "take part",
    "turn down",
    "work out"
]


let rand = Math.floor((Math.random() * list.length));

console.log(list[rand])