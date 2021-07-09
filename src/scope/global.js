//Asigar la misma variable de un varia es una mala practica
var hello = 'Hello';
var hello = "Hello +";
let world = 'Hello World';
const helloWorld = 'Hello World!!!';

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

};

anotherFunction();

//=====================================================00
//Es una mala practica realizar el siguiente script
const helloWorld = () =>{
    globalVar = 'I´m Global';
};

helloWorld();
console.log(globalVar);

