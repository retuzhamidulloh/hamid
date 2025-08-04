let name = prompt('String Taypdagi Malumotni Kiriting')
console.log(name);

let number = prompt('Number Taypdagi Malumotni Kiriting')
let numberConvert = Number(number)
console.log(number);
 
let boolean = prompt('Boolean Tayptagi Malumotni Kiriting')
let booleanConvert = boolean(boolean)
console.log (boolean);

let natja = confirm("malumotigizni kiritganigizga ishonchigiz komilmi")

alert(`Siz kiritgan malumot ${name} ${typeof name} type ga tegishli
Siz kiritgan malumot ${number} ${typeof numberConvert} type ga tegishli
Siz kiritgan malumot ${boolean} ${typeof booleanConvert} type ga tegishli`);