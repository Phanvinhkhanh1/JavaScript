// let square = (a, b, h) => (a + b) * h / 2;
// console.log("Area : " + square(3, 4, 5));


let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error("Arguments must be a number"));
        }
        return callback(undefined, a + b);
    }, 1000);
};

let multiply = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error("Arguments must be a number"));
        }
        return callback(undefined, a * b);
    }, 1000);
};

let divide = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error("Arguments must be a number"));
        }
        if (b == 0) return callback(new Error("Divide by 0"));
        return callback(undefined, a / b);
    }, 1000);
};

// area('4', 5, (err, result) => {
//     if (err) return console.log('Error : ' + err);
//     console.log('Result : ' + result);
// });

let area = (a, b, h, callback) => {
    add(a, b, (err, result) => {
        if (err) return callback(err);
        multiply(result, h, (err, result) => {
            if (err) return callback(err);
            divide(result, 2, (err, result) => {
                if (err) return callback(err);
                callback(undefined, result);
            });
        });
    });
};

area(4, 5, 2, (err, result) => {
    if (err) return console.log("Error : " + err);
    console.log("Area : " + result);
});