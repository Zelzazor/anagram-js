function getAnagrams (words = []){
    const anagrams = new Map();

    for (let i = 0; i < words.length; i++) {
        const word_sorted = words[i].split('').sort().join("");
        const setOfAnagrams = anagrams.get(word_sorted)
        if (setOfAnagrams){
            setOfAnagrams.push(words[i]);
        } 
        else {
            anagrams.set(word_sorted, [words[i]]);
        }
    }
    return anagrams;
}

function toList(anagrams = new Map()){
    let result = [];
    anagrams.forEach((word_list) => {  
        result.push(word_list);
    });
    return result;

}

module.exports = {getAnagrams, toList};