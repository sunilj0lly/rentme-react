'use strict';
let Reflux = require('reflux');
let Actions = require('./actions.js');
let items = [];

module.exports = Reflux.createStore({
    listenables: [Actions],
    onNewItem: function(text) {
        items.push(text);
        this.trigger(items);
    }
});
