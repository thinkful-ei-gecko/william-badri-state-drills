import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }

    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render () {
        console.log(this.state);
        if (this.state.count % 2 === 0 && this.state.count < 8) {
            return (
                <div>
                    <p>tick</p>
                </div>
            )
        }
        
        if(this.state.count % 2 === 1 && this.state.count < 8) {
            return (
                <div>
                    <p>tock</p>
                </div>
            )
        }
        
        if(this.state.count >= 8) {
            clearInterval(this.interval)
            return (
                <div>
                    <p>BOOM!!!!</p>
                </div>
            )
        }
    return (<div>something</div>)    
    }
    
}

export default Bomb;