var nn = require('numnames');

describe('NumNames', function () {
    'use strict';

    var teens = [10, 11, 12, 13, 14, 15, 16, 18, 19];

    var tens = {
        11: 'eleven',
        22: 'twenty two',
        31: 'thirty one',
        43: 'fourty three',
        56: 'fifty six',
        64: 'sixty four',
        78: 'seventy eight',
        85: 'eighty five',
        98: 'ninety eight',
        99: 'ninety nine'
    };

    var hundreds = {
        544: 'five hundred and fourty four',
        987: 'nine hundred and eighty seven',
        110: 'one hundred and ten',
        211: 'two hundred and eleven',
        1:   'one',
        13:  'thirteen',
    };

    var tousands = {
        898982332876: 'eight hundred and ninety eight billions nine hundred and eighty two millions three hundred and thirty two thousands eight hundred and seventy six',
        32876:        'thirty two thousands eight hundred and seventy six',
        1544:         'one thousand five hundred and fourty four',
        2987:         'two thousands nine hundred and eighty seven',
        2011:         'two thousands eleven',
        2211:         'two thousands two hundred and eleven',
        3110:         'three thousands one hundred and ten',
    };

    var predefined = {
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
        40:  'fourty',
        50:  'fifty',
        60:  'sixty',
        70:  'seventy',
        80:  'eighty',
        90:  'ninety',
        100: 'hundred',
    };

    describe('#spell()', function () {

        it('Spells predefined', function () {
            for (var i in predefined) {
                if (predefined.hasOwnProperty(i)) {
                    nn.spell(i).should.equal(predefined[i]);
                }
            }
        });

        it('Spells tens', function () {
            for (var i in tens) {
                if (tens.hasOwnProperty(i)) {
                    nn.spell(i).should.equal(tens[i]);
                }
            }
        });

        it('Spells hundreds', function () {
            for (var i in hundreds) {
                if (hundreds.hasOwnProperty(i)) {
                    nn.spell(i).should.equal(hundreds[i]);
                }
            }
        });

        it('Spells tousands', function () {
            for (var i in tousands) {
                if (tousands.hasOwnProperty(i)) {
                    nn.spell(i).should.equal(tousands[i]);
                }
            }
        });

    });
});
