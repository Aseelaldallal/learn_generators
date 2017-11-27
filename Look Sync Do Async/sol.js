
// Add error handling to this boilerplate. Teach run to throw an exception and
// catch that in generator. firstFile should be null if it doesn't exist.

// var fs = require('fs');
// var dirname = "Look Sync Do Async";

// function run (generator) {
//     var it = generator(go);
//     function go (err, result) {
//         console.log("e", err);
//         console.log("res", result);
//         it.next(result);
//     }
//     go();
// }

// function *gen(done) {
//     var exercises = yield fs.readdir(dirname, done);
//     console.log(exercises); 
// }

// run(gen);

var fs = require('fs');
var dirname = "Look Sync Do Async";

function run (generator) {
      var it = generator(go);
      function go (err, result) {
        if (err) return it.throw(err);
        it.next(result);
      }
      go();
}

run(function* (done) {
    var firstFile;
    try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        firstFile = dirFiles[0];
    } catch(err) {
        firstFile = null;
    }

    console.log(firstFile);
});
