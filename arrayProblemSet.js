function printReverse(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var firstItem = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== firstItem) {
            return false;
        }
    }
    return true;
}

function sumArray(array) {
    var sum = 0;
    array.forEach(function(num) {
        sum += num;
    });
    return sum;
}

function max(array) {
    var max = array[0]; //attempt to handle negative numbers. Index 0 will either by the max number, or be replaced.
    array.forEach(function(num) {
        if (num > max) {
            max = num;
        }
    });
    return max;
}