var Tplr = {
    getVariables: function (template) {
        return template.match(/\{#([^}]+)\}/gi);
    },

    eval : function (template, data) {
        if (!template) {
            throw new Error('You must pass not empty template')
        }

        var matches = this.getVariables(template);
        var i;

        for(i = 0; i < matches.length; i++){
            key = matches[i].replace(/^\{#/, '').replace(/\}$/, '');

            if (data[key]) {
                template = template.replace('{#' + key + '}', data[key]);
            } else {
                throw new Error('There is no key ' + key);
            }
        }

        return template;
    }
};

module.exports = Tplr;
