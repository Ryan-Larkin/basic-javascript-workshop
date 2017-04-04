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

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

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