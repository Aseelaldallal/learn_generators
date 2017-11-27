 
//  Write run function that gets a generator as an argument, starts it and
//  yields promise value foo. Use run from callback exercise as a example.
 

 
function askFoo () {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run (generator) {
    let G = generator();
    var promise = G.next().value;
    promise.then(function(res) {
        G.next(res);
    })
}

function *gen() {
    var foo = yield askFoo();
    console.log(foo);
}

run(gen); 

