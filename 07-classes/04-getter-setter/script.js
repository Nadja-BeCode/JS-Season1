// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Person = {
            firstame : "",
            lastname : "",
            get name() {
                return this.firstname + " " + this.lastname;
            },
            set name(str) {
                var n = str.split(/\s+/);
                this.firstname = n.shift();
                this.lastname = n.join(' ');
            }
        }
    });
});




/*let person = {

    firstName: '',
  
    lastName: '',
  
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    
    set fullName(name) {
      let parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  
  };
  console.log();*/



/*class person  {
    firstName:'firstname';
    lastName:'lastname';
    get fullName(){
        return`${person.firstName} ${person.lastName}`;
    }
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jane Doe'
console.log(fullName);*/