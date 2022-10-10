let square = (a, b, h) => (a + b) * h / 2;
console.log("Area : " + square(3, 4, 5));


let area = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != Number || typeof b != Number) {
            return callback(new Error("Arguments must be a number"));
        }
        return callback(undefined, a + b);
    }, 1000);
};

area('4', 5, (err, result) => {
    if (err) return console.log('Error : ' + err);
    console.log('Result : ' + result);
});