/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
    return "Hey " + name + ", " + "happy " + age + " birthday!"
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function titleCase(sentence) {
    if (sentence !== sentence.toUpperCase()) {
        let words = sentence.split(" ");
        return words.charAt(0).toUpperCase(0);
    }
}

//hvordan skal jeg btw både not change words that are already capitalied og should handle uppercase strings
/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
function generateAcronym(sentence) {
//splitter ord og ser om jeg kan beholde kun de foreste digits
//til uppercase
    //let sentenceUpper = sentence.toUpperCase();

    //sætnign til ord i array
    let words = sentenceUpper.split(" ");

    //    console.log(words);

    //kun 1digit pr ord
    //https://stackoverflow.com/questions/56772571/finding-the-first-letter-of-every-element-in-an-array
        let firstDigit= words.map(firstLetter => {
        return (firstLetter[0])
            //idk får den min næste return til ikke at virke?
            //jeg kander den dog nedenunder som en en af furstDigit
    })
       if (firstDigit === isNaN()) {
           return firstDigit;
       }
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */
function countConsonantsWeighted(str) {
    let counter=0;
    //alle konsotanter fra https://www.google.com/search?q=all+consonants+in+english&oq=all+consona&gs_lcrp=EgZjaHJvbWUqCAgDEAAYFhgeMgYIABBFGDkyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCAgIEAAYFhgeMggICRAAGBYYHtIBCDU2MDNqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
    let consonantsUppercase = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
    let consonatsLowercase = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

    //bruger https://www.geeksforgeeks.org/how-to-check-if-an-element-exists-in-an-array-in-javascript/
    for (let i=0; i<str.length; i++) {
        if (consonantsUppercase.includes(str[i])) {
            sum += 2;
        }
        else if (consonatsLowercase.includes(str[i])) {
            sum ++;
        }
        }
        return sum;
};
