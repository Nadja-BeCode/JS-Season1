// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
            
        }
    }

    console.log(sayHello);
    // your code here
    class Cat {
        constructor(name, gretting) {
            this.name = name;
            this.gretting = gretting;
        }
        static gretting() {
            return
        }
        }
    }


   
    class Dog {
        constructor(name, gretting) {
            this.name = name;
            this.gretting = gretting;
        }
    }
