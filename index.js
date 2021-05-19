const {getAnagrams, toList} = require('./functions');

function main(){
    const start_time = Date.now();
    const words = [...new Set(require("fs").readFileSync("./wordlist.txt").toString('utf-8').toLowerCase().split("\n"))];

    const anagrams = getAnagrams(words);
    const anagramsList = toList(anagrams);
    const end_time = Date.now();

    const diff = end_time - start_time;

    let numberOfAnagrams = 0;
    anagramsList.forEach((list) => {
        if(list.length > 1){
            console.log(list.toString());
            numberOfAnagrams++;
        }
            
    });

    console.log('Took '+diff+'ms');
    console.log('Words: '+words.length);
    console.log('Sets of anagrams: '+numberOfAnagrams);


}

main();
