import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

describe(`Accordion component`, () =>  { 
    const sectionsProp = [{
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
      }];

    it('renders an empty li when sections is not supplied', () => {
            const wrapper = shallow(<Accordion sections={[]}/>)
            expect(toJson(wrapper)).toMatchSnapshot()
  })

    it('component renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
  })

    it('component opens a clicked section', (index) => {
        const wrapper = shallow(<Accordion section={sectionsProp}/>)
        wrapper.find('button').at(index).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
  })

    it('component only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
  })
})