// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat {
        constructor(name, gretting) {
            this.name = name;
            static.staticGretting(); {
                return "staticGretting";
            }
        }
    }


   
    //class Dog {
        constructor(name, gretting) {
            this.name = name;
            this.gretting = gretting;
        }
    }

/*class ClassWithStaticMethod {

    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
  
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  /*output: "static method has been called."*/
