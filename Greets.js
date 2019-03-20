
var g1 = "Greets1", g2 = "Greets2";

export class Greets{

   constructor(hello, name)
   {
       this.hello = hello;
       this.name = name;
   }

   sayGreets(){
       return this.hello + ', ' + this.name + '!';
   }

}

export function evalG1(val){
    g1 = val;

}


export {g1,g2};


