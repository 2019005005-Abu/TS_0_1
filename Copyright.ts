"use strict"
//first variation
let year:HTMLElement |null
year=document.getElementById("year");
let this_Year:string=new Date().getFullYear().toString();

if(year){
    year.setAttribute('datetime',this_Year);
    year.textContent=this_Year;
}

//second variation

const year1=document.getElementById("year") as HTMLSpanElement;
const this_Year1:string=new Date().getFullYear().toString();
year1.setAttribute('datetime',this_Year);
year1.textContent=this_Year;

class Coder{
    second_language!:string
    constructor(
        public readonly name:string,
        public readonly year:number,
        public music:string,
        private age:number,
        protected lang:string
        ){
        this.name=name;
        this.year=year;
        this.music=music;
        this.age=age;
        this.lang=lang
    }
    public getAge(){
        return `Hello  I am now ${this.age} Years Old`
    }
}


let Rifat=new Coder("Abu Al Shahriar",24,"Hello",24,"Bengla");
console.log(
 ` I am ${Rifat.name} I am now ${Rifat.year} I love ${Rifat.music}`);
 console.log(`Now I am ${Rifat.getAge()}`)



// class WevDave extends Coder{
//     constructor(public Computer:string,
//         name:string,year:number,music:string){
//         super(name,year,music);
//         this.Computer=Computer
//     }
//     public GetLanguagr(){
//         console.log(`I speak ${this.second_language}`)
//     }
// }

interface Musician{
    name:string,
    instruemnt:string,
    play(action:string):string
}

class Giters implements Musician{
 name: string;
 instruemnt: string;
 constructor(name:string,instruemnt:string){
     this.name=name;
     this.instruemnt=instruemnt
 }
 play(action: string):string {
     return `My Name is ${this.name} ${action}  and instrument is
     ${this.instruemnt}`
 }
}


const page=new Giters ('Abu Al Shahriar Rifat','Behala');
console.log(page.name,page.instruemnt);

class Pepers{
    static count:number=0;
    static getCount():number{
        return Pepers.count;
    }
    public id:number;
    constructor(public name:string){
        this.name=name;
        this.id=++Pepers.count
    }
}

const Abu=new Pepers('Abu');
const Al=new Pepers('All');
const Shahriar=new Pepers("Shahriar");

console.log(Abu.id);
console.log(Al.id);
console.log(Shahriar.id);



class Bands{
    private dataState:string[]
    constructor(){
       this.dataState=[];
    }

    public get data():string[]{
        return this.dataState
    }
}