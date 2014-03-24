/**
 *  Your task is to process a sequence of integer numbers
 *  to determine the following statistics:
 *
 *  o) minimum value
 *  o) maximum value
 *  o) number of elements in the sequence
 *  o) average value
 *
 *  For example: [6, 9, 15, -2, 92, 11]
 *
 *  o) minimum value = -2
 *  o) maximum value = 92
 *  o) number of elements in the sequence = 6
 *  o) average value = 21.833333
 */
var stat = require('../lib/calc');
var should = require('should');

describe('Stat', function () {
    'use strict';

    var data = [3, 3, 4, 5, 6, 99, -99, 7, 8, 64];

    describe('#collect()', function () {

        it('calculates min from given integers', function () {
            stat.collect(data).min.should.equal(-99);
        });

        it('calculates max from given integers', function () {
            stat.collect(data).max.should.equal(99);
        });

        it('calculates avg from given integers', function () {
            stat.collect(data).avg.should.equal(10);
        });

        it('calculates count from given integers', function () {
            stat.collect(data).count.should.equal(10);
        });

        it('calculates sum from given integers', function () {
            stat.collect(data).sum.should.equal(100);
        });
    });
});
