let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            resolve(a + b);
        }, 2000)
    })
};

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            if (b == 0)
                reject(new Error("Divide by 0"));
            resolve(a / b);
        }, 2000)
    })
};

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument must be a number"));
            }
            resolve(a * b);
        }, 2000)
    })
};

let calArea = async (a, b, h) => {
    let add_ = await add(a, b);
    let mul_ = await multiply(add_, h);
    let ans = await divide(mul_, 0);

    return ans;
}

calArea(4, 5, 6)
    .then(ans => console.log(ans))
    .catch(err => {
        console.log(err);
    })