// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        
        const skittyCat = new Cat('Skitty', '9');
        console.log(skittyCat);

        const pixelCat = new Cat('Pixel', '6');
        console.log(pixelCat);


    });
})();
