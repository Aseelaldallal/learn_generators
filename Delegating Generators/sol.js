

// Write generator-function flat that takes nested array inside and flattens it.





function *flat (arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i].constructor === Array) {
            yield *flat(arr[i]);
        } else {
            yield arr[i];
        }
    }
}

var A = [1, [2, [3, 4], 5], 6];
var G = flat(A);

for (var i of G) {
    console.log( i );
}

// Their SOL
function *flat2 (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        yield* flat(arr[i]);
      }
    } else {
      yield arr;
    }
  }

