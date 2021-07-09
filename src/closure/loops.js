const anotherFunction = () =>{
    //la mejor practica es utilizar la asignacion let, porque puede controlar las variables de javascript
    for(let i = 0;i < 10;i++){
       setTimeout(() => {
           console.log(i);
       }, 1000);
    }
}

anotherFunction();