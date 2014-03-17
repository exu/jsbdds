var NumNames = {

    predefined: {
        0:   'zero',
        1:   'one',
        2:   'two',
        3:   'three',
        4:   'four',
        5:   'five',
        6:   'six',
        7:   'seven',
        8:   'eight',
        9:   'nine',
        10:  'ten',
        11:  'eleven',
        12:  'twelve',
        13:  'thirteen',
        14:  'fourteen',
        15:  'fifteen',
        16:  'sixteen',
        17:  'seventeen',
        18:  'eighteen',
        19:  'nineteen',
        20:  'twenty',
        30:  'thirty',
        40:  'forty',
        50:  'fifty',
        60:  'sixty',
        70:  'seventy',
        80:  'eighty',
        90:  'ninety',
        100: 'hundred',
    },

    divisors: {
        1000:          'thousand',
        1000000:       'million',
        1000000000:    'billion',
        1000000000000: 'billiard',
    },

    findDivisor: function (number) {
        'use strict';

        var divisor = 1;
        for (;;) {
            divisor *= 1000;
            if (divisor > number) {
                return parseInt(divisor / 1000);
            }
        }
    },

    divideNumber: function (number) {
        'use strict';

        var result = [];
        var divisor = this.findDivisor(number);
        var value;

        for (;;) {
            if (divisor === 0) {
                return result;
            }

            value = parseInt(number / divisor);
            result.push({divisor: divisor, value: value});

            number = number - (divisor * value);
            divisor = parseInt(divisor / 1000);
        }

        return result;
    },

    spellHundrets: function (number) {
        'use strict';

        var hundreds = parseInt(number / 100);
        var tens = number % 100;
        var spelled = '';

        if (number === 0) {
            return '';
        }

        if (hundreds > 0) {
            spelled = this.predefined[hundreds] + ' hundred';
        }

        if (hundreds > 0 && tens > 0) {
            spelled += ' and ';
        }

        if (tens > 0) {
            spelled += this.spellTens(tens);
        }

        return spelled;
    },

    spellTens: function (number) {
        'use strict';

        if (this.predefined[number]) {
            return this.predefined[number];
        }

        var spelled = '';
        var ten = 10 * parseInt(number / 10);
        var one = number % 10;

        if (ten > 0) {
            spelled += this.predefined[ten];
            if (one > 0) {
                spelled += ' ';
            }
        }

        if (one > 0) {
            spelled += this.predefined[one];
        }

        return spelled;
    },

    spell : function (number) {
        'use strict';

        if (this.predefined[number]) {
            return this.predefined[number];
        }

        if (number < 100) {
            return this.spellTens(number);
        }

        var divided = this.divideNumber(number),
            spelled = [],
            s = '',
            div = '',
            sub = '',
            num, divisor;

        for (var i = 0; i < divided.length; i++) {
            divisor = divided[i].divisor;
            num = divided[i].value;

            div = divisor > 1 ? ' ' + this.divisors[divisor] : '';

            if (this.predefined[num]) {
                sub = this.predefined[num];
            } else {
                sub = this.spellHundrets(num);
            }

            spelled.push(sub + div);
        }

        return spelled.join(', ');
    }
};

module.exports = NumNames;
