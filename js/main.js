var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');
var AppActions = require('./actions.js');
var ToDoList = require('./components/ToDoList.js');
var Store = require('./store.js');

ReactDOM.render(
  <ToDoList></ToDoList>,
  document.getElementById('content')
);
