const person = () =>{
    var saveName = 'Name';
    return {
        getName: ()=>{
            return saveName;
        },
        setName: (name)=>{
            saveName = name;
        }
    };
};
//generando los datos privados
newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Santiago');
console.log(newPerson.getName());