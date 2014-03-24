function Queue(capacity) {
    this.capacity = capacity;
};

Queue.prototype = new Array;

Queue.prototype.enqueue = function (data) {
    if (!data) {
        throw new Error('Empty values not allowed');
    }

    var position = this.indexOf(data);
    if (~position) {
        this.splice(position, 1);
    }

    if (this.capacity && this.length >= this.capacity) {
        this.shift();
    }

    this.push(data);
};

Queue.prototype.dequeue = Queue.prototype.shift

module.exports = Queue
