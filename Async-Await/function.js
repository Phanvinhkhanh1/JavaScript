//function
let result = (num) => {
    if (num >= 0) {
        return () => { console.log("Positive number") };
    }
    return () => { console.log("Negative number") };
};

result(5)()