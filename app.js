//Type testing
function add(n1, n2) {
    return (n1 + n2);
}
//enum
var role;
(function (role) {
    role[role["admin"] = 0] = "admin";
    role[role["worker"] = 1] = "worker";
    role[role["test"] = 2] = "test";
})(role || (role = {}));
;
var person = {
    'name': 'danijel',
    'age': 30,
    'hobbies': ['playing guitar', 'driving fast cars'],
    'role': [123124, 'string'],
    'test': role.worker
};
//Fooling around with some classes and types
var worker = /** @class */ (function () {
    function worker(name, workerNumber, isOnShift) {
        this.name = name;
        this.workerNumber = workerNumber;
        this.isOnShift = isOnShift;
    }
    return worker;
}());
var workers = [new worker('Danijel', 0, false), new worker('Goran', 2, true)];
workers.forEach(function (worker) {
    console.log("".concat(worker.name, " ").concat(worker.isOnShift));
});
console.log("\n");
//Multiple types for single variable
function combineOrAdd(i1, i2) {
    var result;
    if (typeof i1 === 'number' && typeof i2 === 'number') {
        result = i1 + i1;
    }
    else {
        result = i1.toString() + i2.toString();
    }
    return (result);
}
console.log(combineOrAdd(10, 20));
console.log(combineOrAdd("10", "20"));
