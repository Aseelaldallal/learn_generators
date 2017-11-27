

var fs = require('fs');
let dirname = "Look Sync Do Async";
const ASQ = require('asynquence-contrib');



// =========== WITHOUT PROMISES ========== //
// function *gen(done) {
//     var contents = yield fs.readdir(dirname, done); 
//     console.log(contents);
// }

// var G = gen(function(err, res) {
//     if (err) G.throw(err);
//     else G.next(res);
// });

// G.next();

// ========== WITH PROMISES: ASYNCQUENCE ========= //


// Return a sequence
// function readDirectory(dir) {
//     return ASQ(function(done) {
//         fs.readdir(dir, function(err, res) {
//             if(err) {
//                 done.fail(err);
//             } else {
//                 done(res);
//             }
//         });
//     });
// }

// function *gen() {
//     let exercises = yield readDirectory(dirname);
//     console.log(exercises);
// }

// ASQ().runner(gen);


// ========= WITH PROMISES AND NO RUNNER ======== //

// // Return a Promise - METHOD ONE
// function readDirectory(dir) {
//     return new Promise(function(fullfill, reject) {
//         fs.readdir(dirname, function(err, res) {
//             if(err) {
//                 reject(err);
//             } else {
//                 fullfill(res);
//             }
//         })
//     })
// }

// function *gen() {
//     let exercises = yield readDirectory(dirname);
// }

// //This is my runner
// let G = gen();
// G.next().value.then(function(res) {
//     console.log(res);
// })

// ========= WITH PROMISES: ASYNCQUENCE 2 ========= //

function readDirectory(dir) {
    return ASQ(function(done) {
        fs.readdir(dir, done.errfcb); 
    })
}

function *gen() {
    let exercises = yield readDirectory(dirname);
    console.log(exercises);
}

ASQ().runner(gen);



