
// 01-base/02-var-prompt/script.js - 1.2: var & prompt

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE

    let userName = prompt("What's your name my dear?");
 
    if(userName.length > 0 && userName != "null") {
        document.write("Hello, " + userName);
    } else {
        document.write("Who are you? You need to write your name please ! Thanks.");
    }

})();

