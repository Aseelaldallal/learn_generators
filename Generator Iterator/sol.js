// ## Task

// Write a generator function factorial that, given an input number, starts at 1 and goes
// up to the number, yielding the factorial of each number along the way.

// Don't use recursion. Use a loop.


function *factorial(n){
    for(let i=1; i<=n; i++) {
        var result = 1;
        for(j=1; j<=i; j++) {
            result = j*result;
        }
        yield result;
    }
}

let factGen = factorial(5); // Easier to think of this way

for (var n of factGen) {
    console.log(n)
}
// 1, 2, 6, 24, 120


//Much more efficient solution
// function *factorial2 (n) {
//     var result = 1;
//     for (var i = 1; i <= n; i++) {
//       result *= i;
//       yield result;
//     }
//   }

