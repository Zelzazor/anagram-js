const {getAnagrams, showAnagrams} = require('./functions');

test("Does the anagrams", ()=>{
    words = ["moro", "romo", "anacleto", "cletoana", "arbol", "barlo", "bolra"];

    const anagrams = getAnagrams(words);

    const expectedResult = 'moro romo \nanacleto cletoana \narbol barlo bolra \n';

    console.log(showAnagrams(anagrams));

    expect(showAnagrams(anagrams)).toBe(expectedResult);
});

