const {getAnagrams, toList} = require('./functions');

Array.prototype.toString = function() {
    return this.join(' ');
}

function main(){
    const start_time = Date.now();
    const words = [...new Set(require("fs").readFileSync("./wordlist.txt").toString('utf-8').toLowerCase().split("\n"))];

    const anagrams = getAnagrams(words);
    const anagramsList = toList(anagrams);
    

    
    let numberOfAnagrams = 0;
    let resultStr = "";
    anagramsList.forEach((list) => {
        if(list.length > 1){
            resultStr+=list.toString()+"\n";
            numberOfAnagrams++;
        }
            
    });
    
    console.log(resultStr);
    const end_time = Date.now();
    const diff = end_time - start_time;
    console.log('Took '+diff+'ms');
    console.log('Words: '+words.length);
    console.log('Sets of anagrams: '+numberOfAnagrams);
    


}

main();
