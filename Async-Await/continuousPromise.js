let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            resolve(a + b);
        }, 2000);
    });
};

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            resolve(a * b);
        }, 2000);
    });
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            if (b == 0) return reject(new Error("Divide by 0"));
            resolve(a / b);
        }, 2000);
    });
};

add(5, 5)
    .then(result => add(result, 6))
    .then(result => console.log(result))
    .catch(error => console.log("Error : " + error));

add(4, 5, 6)
    .then(result => multiply(result, 6))
    .then(result => divide(result, 2))
    .then(result => console.log(result))
    .catch(error => console.log("Error : " + error));

