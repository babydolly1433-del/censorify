var c=require("censorify");
console.log(c.getCensoredWords());
console.log(c.censor("some very sad,mad and bad text"));
c.addCensoredWord("gloomy");
console.log(c.getCensoredWords());
console.log(c.censor("a very gloomy day"));
