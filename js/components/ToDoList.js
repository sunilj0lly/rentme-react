"use strict";
var React = require('react');
var Actions = require('../actions.js')

module.exports = React.createClass({
    // this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
    //mixins: [Reflux.connect(todoListStore,"list")],
    getInitialState: function() {
        return {
            input: null,
            list: [],
            inputValue: null,
            submitDisabled: false
        };
    },
    handleFormSubmit: function(e) {
        Actions.newItem(this.state.inputValue);
        e.preventDefault();
    },
    handleInputChange: function(e) {
        let inputValue = e.target.value;
        let isValidInput = inputValue === '';
        if (isValidInput) {
            this.setState({ submitDisabled: 'disabled' });
            return;
        }
        this.setState({
            inputValue: e.target.value,
            submitDisabled: false
        });
    },
    render: function() {

        return (
            <div>
                {
                /* This seems like it should be two separate components */
                }
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
                        <input type="text"
                            value={this.state.input}
                            placeholder='What do you need to do?'
                            onChange={this.handleInputChange} />
                        <input type="submit" value="Add" disabled={this.state.submitDisabled} />
                    </form>
                </section>
            </div>
        );
    }
});
