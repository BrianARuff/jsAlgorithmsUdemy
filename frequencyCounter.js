// o(n^2) solution

function frequencyCounter(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === - 1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// o(n) solution
function frequencyCounter2(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    for(let i of arr1) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
    }
    for(let i of arr2) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }
    return true;
}



console.log(frequencyCounter([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(frequencyCounter2([1, 2, 3, 2], [9, 1, 4, 4]));

