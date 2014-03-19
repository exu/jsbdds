var Zonk = {
    doors: [0,0,0],
    opened: [],
    choices: [],
    records: [],
    index: 0,

    reset: function () {
        var rand = parseInt(Math.random() * 3);

        this.doors = [0,0,0];
        this.opened = [];
        this.choices = [];
        this.doors[rand] = 1;
    },

    answer: function (number) {
        if (number >= this.doors.length) {
            throw new Error("You should choose doors");
        }

        this.choice = number;
        this.choices.push(number);

        return true;
    },

    open: function (number) {
        this.opened.push(number);
    },

    record: function () {
        var lastChoice = this.choices.slice(-1)[0];
        var won = this.doors[lastChoice] === 1;

        var record = {
            choices: this.choices,
            opened: this.opened,
            doors: this.doors,
            won: won,
            index: this.index++,
        };

        this.records.push(record);

        return record;
    },

    getStats: function () {
        var i, sum = 0, sumChanged = 0, item;

        for(i = 0; i < this.records.length; i++) {
            item = this.records[i];
            sumChanged += item.choices.length > 1 ? 1 : 0;
            sum += item.choices.length === 1 ? 1 : 0;
        }

        return {
            not_changed: sum,
            changed: sumChanged,
        };
    }
};

module.exports = Zonk;
