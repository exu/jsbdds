function Queue(cpacity) {
    this.capacity = capacity;
};

Queue.prototype = new Array;
Queue.prototype.enqueue = Queue.prototype.push
Queue.prototype.dequeue = Queue.prototype.shift

module.exports = Queue
