//es un scope local
const helloWorld = ()=>{
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
//no esta definido la variable global
console.log(hello);

var scope = 'I am global';

const functionScope = ()=>{
    //la variable representa la variable local
    var scope = 'I am just a local';
    const func = () =>{
        return scope;
    }
    console.log(func());
};

functionScope();