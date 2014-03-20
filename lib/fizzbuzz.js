var FizzBuzz = {
    get: function (number) {
        var out = '';

        if (number % 3 === 0) {
            out += 'Fizz';
        }

        if (number % 5 === 0) {
            out += 'Buzz';
        }

        if (!out) {
            out = number;
        }

        return out;
    },

    get100FizzBuzzs: function ()
    {
        var out = '';
        for (i = 1; i <= 100; i++) {
            out += this.get(i) + (i < 100 ? ' ' : '');
        }

        return out;
    }
};

module.exports = FizzBuzz;
