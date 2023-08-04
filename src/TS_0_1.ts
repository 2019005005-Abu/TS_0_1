let user_name='Rifat';
console.log(user_name);
let myBio:string=`My UserName is ${user_name}`;
document.write(myBio)

let firstnumber:number=67;
let secondNumber:number=100;
let sum:number=firstnumber+secondNumber;
console.log(sum)

let a:number=13;
let b:number=90;
let c:number=a+b;
console.log(c);

let myName:string=`Abu Al Shahriar Rifat`;
console.log(myName)
let isLoadding:boolean;
isLoadding=true;
let isOpen:boolean=false;
let r:any|number|string|boolean='album';
r=true;
r=12736736;

const sum1=(first:number,last:number)=>{
    return first+last;
}
console.log(sum1(100,200));

let posted:string |number;
let isActivetd:number |boolean |string;

let re:RegExp=/\w+/g

let stringArr:string[]=['One','Two','Three'];
let guiters:string[]=["Start",'Less Paul','5150'];
let mexedData:any[]|number[]=['89',90];
guiters.push('Shahriar');
guiters.push('Abu Al Shahriar');
mexedData.push('Shahriar');
mexedData.push(100);
mexedData.unshift('bangladeshj');
console.log(guiters);

let test=[];
let bands:string[]=[];
bands.push('Shahriar Rifat');

//Tuple
let myTuple:[string,number,boolean] 
myTuple=['Shahriar',2019,true];
let miexed=['John',1,false];
miexed=myTuple;

//Object
let myObjec:object;

myObjec={
    prop1:'Abu',
    prop2:'Al',
    prop3:'Shahriar'
}

type guiters={
    name:string,
    active:boolean,
    albums:(string |number)[]
}

let guitersModel:guiters={
    name:"Rifat54354",
    active:true,
    albums:["6363356","63636","73673636"],
}

let JP:guiters={
    name:'Abu Al Shahriar Rifat',
    active:false,
    albums:["Javascript","Java","Typescript"],
}






