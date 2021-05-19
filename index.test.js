const {getAnagrams, showAnagrams} = require('./functions');

test("Does the anagrams", ()=>{
    words = ["moro", "romo", "anacleto", "cletoana", "arbol", "barlo", "bolra"];

    const anagrams = getAnagrams(words);

    const expectedResult = 'anacleto cletoana\nmoro romo\narbol barlo bolra'

    expect(showAnagrams(anagrams)).toBe(expectedResult);
});

