function frequencyCounter(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    const obj = {};
    arr1.forEach((ele, index) => {
        if(arr2.includes(ele**2)) {
            if (!obj[ele ** 2]) {
                obj[ele ** 2] = {
                    count: 1,
                    element: ele ** 2
                };
            } else {
                obj[ele**2].count += 1
            }
        }

    });
    console.log(obj);
    for(let i in obj) {
        if(Object.getOwnPropertyNames(obj).length == arr1.length) {
            if(obj[i].count > 1) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(frequencyCounter([1, 1, 3], [1, 1, 1]));
