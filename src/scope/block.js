 const fruits = () =>{
     if(true){
         var fruits1 = 'Apple';
         let fruits2 = 'Banana';
         const fruits3 = 'Kiwi';
         console.log(fruits2);
         console.log(fruits3);
     }
     //si accede la variable local
     console.log(fruits1);
     //las dos variables no accedo porque las variables esta dentro un bloque de codigo const y let 
     //console.log(fruits2);
     //console.log(fruits3);
 }
 fruits();



 let x = 1;
 {
     let x= 2;
     console.log(x);
 }
 console.log(x);


 const anotherFunction = () =>{
     //la mejor practica es utilizar la asignacion let, porque puede controlar las variables de javascript
     for(let i = 0;i < 10;i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
     }
 }

 anotherFunction();