var censoredwords=["sad","bad","mad"];
var customcensoredwords=[];
function censor(instr){
    for(idx in censoredwords){
        instr=instr.replace(censoredwords[idx],"****");
    }
    for(idx in customcensoredwords){
        instr=instr.replace(customcensoredwords[idx],"****");
    }
    return instr;

}
function addCensoredWord(word)
{
    customcensoredwords.push(word);
}
function getCensoredWords(){
    return 
    censoredwords.concat(customcensoredwords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords;
