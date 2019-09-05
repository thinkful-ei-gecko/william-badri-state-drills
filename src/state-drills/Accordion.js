import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    }
    state = {
        currentlyActive: null, 
        
    }

    handleClick = (index) => {
        this.setState({
            currentlyActive: index
        })
    }

    render() {
        return (
            <ul>
                {this.props.sections.map((section, index) => 
                <li>
                    <button onClick={()=>this.handleClick(index)}>{section.title}</button>
                    {(this.state.currentlyActive === index) && <p>{section.content}</p>}
                </li>)}
            </ul>
        );
    }
}


export default Accordion;