function firstLetter(inputString) {
    if (inputString) {
        return inputString[0];
    }
}

function lastLetter(inputString) {
    if (inputString) {
        return inputString[inputString.length-1];
    }
}

function letterAtPosition(inputString, position) {
    if (inputString) {
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    if (typeof (num1 && num2) === 'number') {
        return num1+num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if (typeof (num1 && num2) === 'number') {
        return num1*num2;
    }
}

function calculator(operation, num1, num2) {
    switch(operation) {
        case 'add':
            return num1+num2;
        
        case 'sub':
            return num1-num2;
        
        case 'mult':
            return num1*num2;
            
        case 'div':
            return num1/num2;
    }
}

function repeatString(inputString, numRepetitions) {
    var finalString = "";
    
    if (numRepetitions > 0) {
        for (var i = 1; i <= numRepetitions; i++) {
            finalString += inputString;
        }
    }
    
    return finalString;
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function longestWord(inputString) {
    var longestWord = "";
    var words       = inputString.split(" ");
    
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}

function capitalize(inputString) {
    if (inputString) {
        inputString  = inputString.toLowerCase();
        
        var words = inputString.split(" ");
        
        for (var i = 0; i < words.length; i++) {
            var letters = words[i].split("");
            letters[0] = letters[0].toUpperCase();
            words[i] = letters.join("");
        }
        
        return words.join(" ");
    }
    else {
        return inputString;
    }
}

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
    
    if (arrayOfNumbers.length > 0) {
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            if (typeof arrayOfNumbers[i] === 'number') {
                sum += arrayOfNumbers[i];
            }
            else {
                return undefined;
            }
        }
    }
    
    return sum;
}

function uniqueElements(array1, array2) {
    var uniqueArray = [];
    var matches;
    
    for (var i = 0; i < array1.length; i++) {
        if (typeof array1[i] !== 'number') {
            return undefined;
        }
        matches = false;
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                matches = true;
                break;
            }
        }
        if (!matches) {
            uniqueArray.push(array1[i]);
        }
    }
    
    for (var i = 0; i < array2.length; i++) {
        if (typeof array2[i] !== 'number') {
            return undefined;
        }
        
        matches = false;
        for (var j = 0; j < array1.length; j++) {
            if (array2[i] === array1[j]) {
                matches = true;
                break;
            }
        }
        if (!matches) {
            uniqueArray.push(array2[i]);
        }
    }
        
    return uniqueArray;
}

function isPalindrome(inputString) {
    inputString = inputString.replace(/\W/g, '').toLowerCase();
    
    var reversedString = reverseString(inputString);
    var palindrome = false;
    
    if (inputString === reversedString) {
        palindrome = true;
    }
    
    return palindrome;

}

function wrapCharacter(inputString) {
    var letters = inputString.split("");
    //var tempString = "";
    //var tempArray  = [];
    
    for (var charCount = 0; charCount < letters.length; charCount++) {
        if (charCount % 40 === 0 && charCount != 0) {
            letters[charCount] = letters[charCount].trim()+"\n";
            
            if (letters[charCount+1] === " ") {
                letters.splice(charCount+1, 1, "");
            }
        }
    }
    
    return letters.join("");
    
    
    /*
    for (var i = 0; i < letters.length; i++) {
        tempString += letters[i];
        
        if (tempString.length == 40) {
            tempString += "\n";
            tempArray.push(tempString);
            tempString = "";
        }
    }
    
    return tempArray.join("");
    */
}

function wrapWord(inputString) {
    var words = inputString.split(" "); // split the string into individual words
    var totalChars = 0; // counter for characters to make sure words dont go over 40
    
    var tempString = ""; // temporary string to store all values for a line to format later
    var tempArray  = []; // array where each index is a line of the total string, join with \n
    var l;
    for (var i = 0, l = words.length; i < l; i++) {
        if (words[i].length >= 40) {
            if (tempString) {
                tempArray.push(tempString);
                tempString = "";
                totalChars = 0;
            }
            tempArray.push(words[i]); // if the word is too big, push it into the array to be its own line
        }
        else {
            totalChars += (words[i]+ " ").length; // add up the total characters to get to 40
            tempString += (words[i] + " "); // add each word to the current line
            // ^ will need to change this so that the line stays under 40 characters instead of going over            

            if (totalChars >= 40) { // when we get to 40 characters, we need to go to a new line
                tempArray.push(tempString);
                tempString = ""; //reset the string so we can store a new line
                
                totalChars = words[i].length; // set the total characters to the last word which should start on the new line
            }
            else if (i === l-1) {
                tempArray.push(tempString); // otherwise just push the last sentence onto the array to be the last line
            }
        }
    }
    
    for (var i = 0, l = tempArray.length; i < l; i++) {
        tempArray[i] = tempArray[i].trim(); // trim the spaces from the beginning and end of each line
    }
    return tempArray.join("\n"); // join the array with the new line command so each index will be on a new line
}

function bubbleSort(arrayOfNumbers) {
    var tempIndex = 0;
    var swapped;
    
    do {
        swapped = false; // make sure this starts as false at the start of the function so we dont get an endless loop
        
        for (var i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] > arrayOfNumbers[i+1]) {
                tempIndex = arrayOfNumbers[i]; // put index i into temp place;
                arrayOfNumbers[i] = arrayOfNumbers[i+1]; // replace index i with index i+1, the one after it
                arrayOfNumbers[i+1] = tempIndex; // replace index i+1 with the temp value, which is equal to the now-deleted index i    
                
                swapped = true; // set to true only if we have swapped elements, only set this to true within the loop
            }
        }
    } while(swapped);
        
    bubbleSort(arrayOfNumbers); // run the function again with the newly sorted array until it ends
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};