function getAnagrams (words){
    const anagrams = new Map();

    for (let i = 0; i < words.length; i++) {
        const word_sorted = words[i].split('').sort().join("");
        const ana = anagrams.get(word_sorted)
        if (ana){
            ana.push(words[i]);
        } 
        else {
            anagrams.set(word_sorted, [words[i]]);
        }
    }
    return anagrams;
}

function showAnagrams(anagrams){
    let result = "";
    anagrams.forEach((word_list) => {
        let str = "";
        
        word_list.forEach((word) =>{
            str += word + " ";
        });
        
        result+=str+"\n"
        
    });
    return result;

}

module.exports = {getAnagrams, showAnagrams};