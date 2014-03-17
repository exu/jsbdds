var Bomber = {
    getBombs: function (input) {
        'use strict';

        var data = input.split('\n'),
            bombs = [],
            row = [],
            toInt = function (i) {
                return i === '*' ? 1 : 0;
            };

        for (var i = 1; i < data.length; i++) {
            row = data[i].split('').map(toInt);
            bombs[i - 1] = row;
        }

        return bombs;
    },

    countNeighbourBombers: function (bombs, i, j)
    {
        'use strict';

        var count = 0, x, y, k;

        var directions = [
            [0, -1], [0, 1],
            [1, 0],  [1, 1],
            [1, -1], [-1, -1],
            [-1, 0], [-1, 1],
        ];

        for (k = 0; k < directions.length; k++) {
            x = i - directions[k][0];
            y = j - directions[k][1];

            if (bombs[x] && bombs[x][y]) {
                count += bombs[x][y];
            }
        }

        return count;
    },

    getHint: function (input)
    {
        'use strict';

        var bombs = this.getBombs(input),
            j, i, result = [];

        for (i = 0; i < bombs.length; i++) {
            for (j = 0; j < bombs[i].length; j++) {
                if (!result[i]) {
                    result[i] = [];
                }
                if (bombs[i][j]) {
                    result[i][j] = '*';
                } else {
                    result[i][j] = this.countNeighbourBombers(bombs, i, j);
                }
            }
        }

        return result;
    },

    parse: function (input)
    {
        'use strict';

        var hints = this.getHint(input);
        var i, data = [];

        for (i = 0; i < hints.length; i++) {
            data.push(hints[i].join(''));
        }

        return data.join('\n');
    }

};

module.exports = Bomber;
