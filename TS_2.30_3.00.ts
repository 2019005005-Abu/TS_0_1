class Bandss{
    private dataState:string[];
    constructor(){
        this.dataState=[];
    }
    public get data():string[]{
        return this.dataState;
    }
    public set data(value:string[]){
         if(Array.isArray(value) && value.every(el=>
            typeof el ==='string')){
                this.dataState=value;
            }else{
             throw new Error("Please Params is not an array of strings");

            }
    }
}

const myBands=new Bandss();
myBands.data=["Shahriar","Rifat","Bangladesh"];
console.log(myBands.data);
myBands.data=[...myBands.data,'Abu Al '];
myBands.data=["HTML","CSS","Javascript"];


//index signature

// interface TransactionObj{
//     pizza:number,
//     Books:number,
//     Job:number,
// }


// interface TransactionObj{
//     [index:string]:string
// }

// const todaysTracstion:TransactionObj={
//     pizza:-10,
//     Books:-5,
//     Job:50
// }
// console.log(todaysTracstion.pizza);
// console.log(todaysTracstion.Books);
// console.log(todaysTracstion.Job);

// let props:string='Abu';

// const todaysNet=(trans:TransactionObj):number=>{
//     let total=0;
//     for(let transt in trans){
//         total+=trans[transt];
//     }
//     return total
// }


interface Student{

    name:string |number |number[] |undefined,
    GPA:number,
    classes?:number[]
}

const student:Student={
    name:"Shahriar",
    GPA:3.5,
    classes:[10,20]
}

for(const key in student){
    console.log(`${key} :${student[key as keyof Student]}`);

}

Object.keys(student).map(key=>{
    console.log(student[key as keyof Student]);
})

const logStudentKey=(student:Student,key:keyof  Student)
:void=>{
    console.log(`Student:${key} :${student[key]}`)
}

logStudentKey(student,'GPA');
logStudentKey(student,'classes');
logStudentKey(student,'classes');

interface Incomes{
    [key:string]:number
}
type Strmes='salary'|'bonus' |'sidebounus';
type Income= Record<Strmes,number |string>

const monthlyIncome:Incomes={
    salary:500,
    bonus:100,
    sidestule:250
}

for(const revunue in monthlyIncome){
    console.log(monthlyIncome[revunue as keyof Incomes])
}

//Generics

const echo=<T>(arg:T):T=>arg
const isObject=<T>(arg:T):boolean=>{
    return (typeof arg ==='object' && 
    !Array.isArray(arg) && arg !==null)
}

console.log(isObject(true));
console.log('Rifat');
console.log(isObject([1,2,3]));
console.log(isObject({name:'Rifat'}));
console.log(isObject(null))


const istrue=<T>(arg:T):{arg:T,is:boolean}=>{
    if(Array.isArray(arg) && !arg.length){
        return{
            arg,
            is:false
        }
    }
    if(isObject(arg) && !Object.keys(arg as keyof T).length){
      return{
        arg,
        is:false
      }
    }
    return {
        arg,
        is:!!arg
    }
}

console.log(istrue(false));
console.log(istrue(0));
console.log(istrue(true));
console.log(istrue(1));
console.log(istrue('Dave'))
console.log(istrue(''));
console.log(istrue(null));
console.log(istrue(undefined));
console.log(istrue({}));
console.log(istrue({name:'Rifat'}));
console.log(istrue([]));
console.log(istrue([1,2,3]));
console.log(istrue(NaN));
console.log(istrue(-0));

