var bomb = require('../lib/bomberman');
var should = require('should');

/**
 *  A field of N x M squares is represented by N lines of exactly M characters each. The character ‘*’ represents a mine and the character ‘.’ represents no-mine.
 *
 *  Example input (a 3 x 4 mine-field of 12 squares, 2 of
 *  which are mines)
 *  3 4 *... ..*. ....
 *  Your task is to write a program to accept this input and produce as output a hint-field of identical dimensions where each square is a * for a mine or the number of adjacent mine-squares if the square does not contain a mine.
 *
 *  Example output (for the above input)
 *
 *  *211 12*1 0111
 */
describe('Bomber', function () {
    'use strict';

    var data = {
        'input': '3 4\n*...\n..*.\n....',
        'dimensions': [3, 4],
        'bombs': [
            [1, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]
        ],
        'hint' : [
            ['*', 2, 1, 1],
            [1, 2, '*', 1],
            [0, 1, 1, 1],
        ],
        'output' : '*211\n12*1\n0111'
    };

    it('locates bombs ', function () {
        bomb.getBombs(data.input).should.be.eql(data.bombs);
    });

    it('returns hints data ', function () {
        bomb.getHint(data.input).should.be.eql(data.hint);
    });

    it('counts neighbour suicide bombers', function () {
        bomb.countNeighbourBombers([[1, 0, 0], [1, 0, 0], [1, 0, 0]], 1, 1).should.be.equal(3);
        bomb.countNeighbourBombers([[1, 0, 0], [1, 0, 0], [1, 0, 0]], 2, 2).should.be.equal(0);
        bomb.countNeighbourBombers([[1, 0, 0], [1, 0, 0], [1, 0, 0]], 0, 0).should.be.equal(1);
    });

    it('returns string output', function () {
        bomb.parse(data.input).should.be.eql(data.output);
    });
});
