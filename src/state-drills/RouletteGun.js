import React from 'react';

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    handleButton = () => {
        this.setState({
            spinningTheChamber: !this.state.spinningTheChamber
        })
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: !this.state.spinningTheChamber
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
        console.log(this.timeout);
    }

    render() {
        console.log(this.state);
        if(this.state.spinningTheChamber) {
            return (
                <div>
                    <p>spinning the chamber and pulling the trigger!...</p>
                    <button onClick={this.handleButton}>Pull the trigger!</button>
                </div>
            )
        }
        if(this.state.chamber === this.props.bulletInChamber) {
            return (
                <div>
                    <p>BANG!!!!</p>
                    <button onClick={this.handleButton}>Pull the trigger!</button>
                </div>
            )
        }
        return (
            <div>
                <p>You're safe!</p>
                <button onClick={this.handleButton}>Pull the trigger!</button>
            </div>
        )
    }

}

export default RouletteGun;