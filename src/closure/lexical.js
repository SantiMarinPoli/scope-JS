//la funcion es similar en la carpeta de closure.js pero inicializa un parametro y guarda los datos del return
const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(2);
myCount();
myCount();
myCount();
myCount();

//la funcion se inicializa en 10 comienza la secuencia la sumatoria
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();