let fs = require('fs')

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error("Argument not a number"));
            }
            resolve(a + b);
        }, 2000);
    });
}

// add('4', 5)
//     .then((res) => console.log(res), (err) => console.log(err.toString()));

let readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
};

readFile('./data.txt')
    .then((data) => console.log("Data : " + data),
        (err) => console.log("Error : " + err));