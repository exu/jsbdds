var Zonk = {
    doors: [0,0,0],
    opened: [],
    choices: [],

    reset: function () {
        var rand = parseInt(Math.random() * 3);

        this.doors = [0,0,0];
        this.opened = [];
        this.choices = [];
        this.doors[rand] = 1;
    },

    answer: function (number) {
        if (number >= this.doors.length) {
            return false;
        }

        this.choice = number;
        this.choices.push(number);

        return true;
    }


};

module.exports = Zonk;
