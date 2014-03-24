var should = require('should');
var List = require('../lib/list');

/**
 *  Develop a recently-used-list class to hold strings uniquely in Last-In-First-Out order.
 *
 *  A recently-used-list is initially empty.
 *  The most recently added item is first, the leastrecently added item is last.
 *  Items can be looked up by index, which counts from zero.
 *  Items in the list are unique, so duplicate insertions are moved rather than added.
 *  Optional extras:
 *  Null insertions (empty strings) are not allowed.
 *  A bounded capacity can be specified, so there is an upper limit to the number of items contained,
 *  with the least recently added items dropped on overflow.
 */
describe('RecentlyUsedList', function () {
    'use strict';

    var list;
    beforeEach(function () {
    });

    it('enqueue new items', function () {
        list = new List();
        list.enqueue(1)
        list.dequeue().should.equal(1)
    });

    it('adds first things first last things last', function () {
        list = new List()
        list.enqueue(1)
        list.enqueue(2)
        list.enqueue(3)
        list.dequeue().should.equal(1)
        list.dequeue().should.equal(2)
        list.dequeue().should.equal(3)
    });

    it('search items by index', function () {
        list = new List()
        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);

        list[2].should.equal(3);
        list[0].should.equal(1);
        list[1].should.equal(2);

        should(list[4]).be.undefined;
    });

    it('adds only unique items', function () {
        list = new List()

        list.enqueue(1);
        list.enqueue(2);
        list.enqueue(3);
        list.enqueue(3);
        list.enqueue(2);
        list.enqueue(1);

        list.dequeue().should.equal(3);
        list.dequeue().should.equal(2);
        list.dequeue().should.equal(1);

        should(list.dequeue()).be.undefined;
    });

    it('allow only not null values', function () {
        list = new List()
        list.enqueue(1)
        should(list.enqueue(1)).throw();
    });

    it('has capacity', function () {
        list = new List(3);

        list.enqueue(1)
        list.enqueue(2)
        list.enqueue(3)
        list.enqueue(4)
        list.enqueue(5)
        list.enqueue(6)

        list.dequeue().should.equal(4);
        list.dequeue().should.equal(5);
        list.dequeue().should.equal(6);

        should(list.dequeue()).be.undefined;
    });

});
