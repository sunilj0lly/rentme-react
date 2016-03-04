var Reflux = require('reflux');
var Actions = require('./actions.js');

var toDoItems = [];

module.exports = Reflux.createStore({
    listenables: [Actions],
    onNewItem: function(text) {
        toDoItems.push(text);
        console.log(toDoItems);
    }
});
