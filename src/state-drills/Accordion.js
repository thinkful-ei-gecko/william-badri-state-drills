import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [{
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          },]
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