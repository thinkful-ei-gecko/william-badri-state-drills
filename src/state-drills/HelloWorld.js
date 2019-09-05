import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    };

    handleFriendClick = () => {
        this.setState({
            who: 'friend'
        });
    };
    handleReactClick = () => {
        this.setState({
            who: 'react'
        });
    };
    handleWorldClick = () => {
        this.setState({
            who: 'world'
        });
    };
    render () {
    return (
        <div>
            <p>Hello, {this.state.who}!</p>
            <button onClick={this.handleFriendClick}>Friend</button>
            <button onClick={this.handleReactClick}>React</button>
            <button onClick={this.handleWorldClick}>World</button>
        </div>
        );
    }
}

export default HelloWorld;