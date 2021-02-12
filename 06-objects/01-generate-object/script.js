// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let intro = {
            lastName : "Agostinho",
            firstName : "Nadja", 
            age : "7" , 
            city: "Tubize" , 
            country: "Belgium",
        }
        const me = Object.create(person);

        me.lastname = "Agostinho";
        me.firstName = "Nadja"; 
        me.age = "7"; 
        me.city= "Tubize" ; 
        me.country= "Belgium";
        
        me.intro();
    });
})();
