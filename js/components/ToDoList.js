"use strict";
var React = require('react');
var Actions = require('../actions.js')

module.exports = React.createClass({
    // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
    //mixins: [Reflux.connect(todoListStore,"list")],
    getInitialState: function() {
        return {
            input: 'Add a new to do item',
            list: [],
            inputValue: null
        };
    },
    handleFormSubmit: function(e) {
        Actions.newItem(this.state.inputValue);
        e.preventDefault();
    },
    handleInputChange: function(e) {
        this.setState({inputValue: e.target.value});
    },
    render: function() {

        return (
            <div>
                <section>
                    <h1>Things that need to get done</h1>
                    {
                    /* Note - this really hard to read, how can it be
                    written more clearly? Move to top of render method? */
                        (() => {
                            let hasItems = this.state.list.length > 0;
                            if (hasItems) {
                                return <ul> {
                                    this.state.list.map(item => {
                                        return <li key={item}>{item}</li>;
                                    })
                                }
                                </ul>
                            } else {
                                return <p>You have no to do items</p>
                            }
                        })()
                    }
                </section>

                <section>
                    <h1>Add something new</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" defaultValue={this.state.input} onChange={this.handleInputChange}/>
                        <input type="submit" value="Add" />
                    </form>
                </section>
            </div>
        );
    }
});
