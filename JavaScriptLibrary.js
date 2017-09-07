var _ = {
    map: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    },
    reduce: function(arr, callback, memo) {
        if (memo === undefined) {
            var memo = arr[0];
            var start = 1;
        } else {
            var start = 0;
        }
        for (let i = start; i < arr.length; i++) {
            memo = callback(memo, arr[i]);
        }
        return memo;
    },
    find: function(arr, callback) {
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    filter: function(arr, callback) {
        let filtered = [];
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                filtered.push(arr[i]);
            }
        }
        return filtered;
    },
    reject: function(arr, callback) {
        let rejects = [];
        for (let i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                rejects.push(arr[i]);
            }
        }
        return rejects;
    }
}

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.filter([1,2,3,4,5,6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1,2,3,4,5,6], function(num){ return num % 2 == 0; }));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.find([1, 3, 5], function(num){ return num % 2 == 0; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }));