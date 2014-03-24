var fb = require('../lib/fizzbuzz');
var should = require('should');

describe('FizzBuzz', function () {
    'use strict';

    beforeEach(function () {
    });

    it('prints number', function () {
        fb.get(1).should.equal(1);
        fb.get(2).should.equal(2);
        fb.get(7).should.equal(7);
    });

    it('prints fizz on % 3', function () {
        fb.get(3).should.equal('Fizz');
        fb.get(9).should.equal('Fizz');
        fb.get(99).should.equal('Fizz');
    });

    it('prints buzz on % 5', function () {
        fb.get(5).should.equal('Buzz');
        fb.get(10).should.equal('Buzz');
        fb.get(100).should.equal('Buzz');
    });

    it('prints FizzBuzz on % 3 and % 5', function () {
        fb.get(15).should.equal('FizzBuzz');
        fb.get(60).should.equal('FizzBuzz');
        fb.get(150000).should.equal('FizzBuzz');
    });

    it('prints FizzBuzzy string', function () {
        var expected = '1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz ' +
            '11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz ' +
            'Fizz 22 23 Fizz Buzz 26 Fizz 28 29 FizzBuzz ' +
            '31 32 Fizz 34 Buzz Fizz 37 38 Fizz Buzz ' +
            '41 Fizz 43 44 FizzBuzz 46 47 Fizz 49 Buzz ' +
            'Fizz 52 53 Fizz Buzz 56 Fizz 58 59 FizzBuzz ' +
            '61 62 Fizz 64 Buzz Fizz 67 68 Fizz Buzz ' +
            '71 Fizz 73 74 FizzBuzz 76 77 Fizz 79 Buzz ' +
            'Fizz 82 83 Fizz Buzz 86 Fizz 88 89 FizzBuzz ' +
            '91 92 Fizz 94 Buzz Fizz 97 98 Fizz Buzz';

        fb.get100FizzBuzzs().should.equal(expected);
    });

});
