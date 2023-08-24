"use strict";
class Bandss {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else {
            throw new Error("Please Params is not an array of strings");
        }
    }
}
const myBands = new Bandss();
myBands.data = ["Shahriar", "Rifat", "Bangladesh"];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Abu Al '];
myBands.data = ["HTML", "CSS", "Javascript"];
const student = {
    name: "Shahriar",
    GPA: 3.5,
    classes: [10, 20]
};
for (const key in student) {
    console.log(`${key} :${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student:${key} :${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'classes');
logStudentKey(student, 'classes');
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidestule: 250
};
for (const revunue in monthlyIncome) {
    console.log(monthlyIncome[revunue]);
}
//Generics
const echo = (arg) => arg;
const isObject = (arg) => {
    return (typeof arg === 'object' &&
        !Array.isArray(arg) && arg !== null);
};
console.log(isObject(true));
console.log('Rifat');
console.log(isObject([1, 2, 3]));
console.log(isObject({ name: 'Rifat' }));
console.log(isObject(null));
const istrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return {
            arg,
            is: false
        };
    }
    if (isObject(arg) && !Object.keys(arg).length) {
        return {
            arg,
            is: false
        };
    }
    return {
        arg,
        is: !!arg
    };
};
console.log(istrue(false));
console.log(istrue(0));
console.log(istrue(true));
console.log(istrue(1));
console.log(istrue('Dave'));
console.log(istrue(''));
console.log(istrue(null));
console.log(istrue(undefined));
console.log(istrue({}));
console.log(istrue({ name: 'Rifat' }));
console.log(istrue([]));
console.log(istrue([1, 2, 3]));
console.log(istrue(NaN));
console.log(istrue(-0));
