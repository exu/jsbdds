module.exports = {
    collect : function (arr) {
        'use strict';

        var sum = arr.reduce(function (pv, cv) { return pv + cv; }, 0);
        var length = arr.length;

        return {
            'min' : Math.min.apply(null, arr),
            'max': Math.max.apply(null, arr),
            'avg': sum / length,
            'count': length,
            'sum': sum
        };
    }
};
