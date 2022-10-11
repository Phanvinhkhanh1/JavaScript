let promise = new Promise((resolve, reject) => {
    // resolve("Successfull");
    reject("Failed");
});

promise.then((msg) => { console.log(msg); },
    (errorMsg) => { console.log(errorMsg); }
)