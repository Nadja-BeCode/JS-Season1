//07-classes/02-methods/script.js - 7.2: methods


(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        
        let person = class {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
        
        sayHello () {
        return ("Hello," + " " + this.firstname + " " + this.lastname);
        }
    }
        let newPerson = new person('Jane', 'Doe');
        console.log(newPerson.sayHello());
    });

})();
