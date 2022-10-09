let fs = require('fs');

//async function
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) return console.log("Error : " + err);
    console.log("Data : ", data);
});

//sync function
// let data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);
console.log("Done");