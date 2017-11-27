// Write a range generator-function that takes from and to arguments.

// Print the numbers as strings within the specified range, one per line.

// Follow this boilerplate:

function *range(from, to) {
    while(from <= to) {
        yield from++;
    }
}

// range returns an iterator

for (var r of range(5, 10)) {
    console.log( r );
}
// should print: 5, 6, 7, 8, 9, 10


