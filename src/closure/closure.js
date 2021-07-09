//Esta funcion no guarda los cambiios en la variable
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(2);
moneyBox(5);

//==========================================================
//se guarda el return para que guarde los valores anteriores
const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);