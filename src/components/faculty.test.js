import React from 'react';

import { shallow, configure } from 'enzyme';

import Facultytimetable from './Facultytimetable';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of faculty', () => {
	var wrapper = shallow(<Facultytimetable />);
	wrapper.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: ' ' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['fid']).toBe('Select id');
});

it('validates inputs of faculty', () => {
	var wrapper = shallow(<Facultytimetable />);
	wrapper.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: ' ' } });

	wrapper.find('[name="fid"]').at(0).simulate('change', { target: { name: 'fid', value: '401' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['fid']).toBe('');
});
it('validates inputs of faculty time table-sem', () => {
	var wrapper = shallow(<Facultytimetable />);
	wrapper.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: ' ' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['sem']).toBe('Select sem');
});
it('validates inputs of faculty time table-sem', () => {
	var wrapper = shallow(<Facultytimetable />);

	wrapper.find('[name="sem"]').at(0).simulate('change', { target: { name: 'sem', value: '2' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['sem']).toBe('');
});
