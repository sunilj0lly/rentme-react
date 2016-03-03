var React = require('react');
var ReactDOM = require('react-dom');
var Reflux = require('reflux');

var Actions = Reflux.createActions([
    "statusUpdate",
    "statusEdited",
    "statusAdded"
  ]);

  console.log(Actions); //test Reflux is present

var MyReact = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a MyReact.
      </div>
    );
  }
});

ReactDOM.render(
  <MyReact></MyReact>,
  document.getElementById('content')
);
