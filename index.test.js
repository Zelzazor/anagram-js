const {getAnagrams, toList} = require('./functions');

test("Does the anagrams", ()=>{
    const words = ["moro", "romo", "anacleto", "cletoana", "arbol", "barlo", "bolra"];

    const anagrams = getAnagrams(words);

    const expectedResult = [['anacleto', 'cletoana'],['moro','romo'], ['arbol', 'barlo', 'bolra']].sort();

    const actualResult = toList(anagrams).sort();

    console.log(actualResult);

    let areAllAnagramsTrue = true;

    actualResult.forEach((list, index) => {
        console.log(list.toString());
        if(list.toString() != expectedResult[index]){
            areAllAnagramsTrue = false;
        }
    });

    expect(areAllAnagramsTrue).toBe(true);
});

