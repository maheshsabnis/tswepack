var RandomInt = function () {
    return (Math.random() * 10).toFixed(0);
};
var find_even = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var value = parseInt(RandomInt());
        if (value % 2 == 0) {
            resolve(value);
        }
        else {
            reject('Odd number found!');
        }
    }, 1000);
});
find_even.then(function (value) {
    console.log('Resloved-1:', value + 1);
    return "".concat(value + 1);
}).then(function (value) {
    console.log('Resloved-2:', value + 1);
}).catch(function (error) {
    console.log('Rejected:', error);
});
