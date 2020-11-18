const _ = {
    clamp: function (number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);

        return clampedValue;
    },

    inRange: function (number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            const mid = end;
            end = start;
            start = mid;
        }

        const isInRange = start <= number && number < end;
        return isInRange; 
    },

    words (string) {
        const words = string.split(' ');
        return words;
    },

    pad (string, length) {
        if (string.length >= length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    has (object, key) {
        if (object[key] === undefined) {
            return false;
        } else {
            return true;
        }
    },

    invert (object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {originalValue : key}
        };

        return invertedObject;
    },

    findKey (object, prefunc) {
        
    }
};




// Do not write or modify code below this line.
module.exports = _;