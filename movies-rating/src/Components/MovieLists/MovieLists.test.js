import React from 'react';
import Enzyme, {shallow, mount, childAt} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Movies from './MovieLists';

describe('<Movies>',() => {
    it('Should render a Div Dom element', ()=> {
        const wrapper = shallow(<Movies />);
        expect(wrapper.find(<div/>)).to.have.lengthOf(0);
            });

            it('renders an div with class `container`', () => {
                const wrapper = shallow(<Movies />);
                expect(wrapper.find('container')).to.have.lengthOf(0);
              });

              it('renders an div with class `row`', () => {
                const wrapper = shallow(<Movies />);
                expect(wrapper.find('row')).to.have.lengthOf(0);
              });

    it('Should render a table Dom element', ()=> {
const wrapper = shallow(<Movies />);
expect(wrapper.find(<table/>));
expect(wrapper.find(<tr/>));
expect(wrapper.find(<th/>));
expect(wrapper.find(<td/>));
    });

    it('allows us to set props', () => {
        const wrapper = mount( <table className="table table-striped" />);
        expect(wrapper.props().className).to.equal('table table-striped');
        wrapper.setProps({ className: 'foo' });
        expect(wrapper.props().className).to.equal('foo');
      });

      it('simulates click events on button', () => {
        
        const wrapper = mount( <button className="btn btn-danger" />);
        wrapper.find('button').simulate('click');
        expect(wrapper.props().className).to.equal('btn btn-danger');
      });

      it('simulates click events on Table rating header for sorting', () => {
        
        const wrapper = mount( <th/>);
        wrapper.find('th').simulate('click');
        expect(wrapper.find(<th/>));
      });
});