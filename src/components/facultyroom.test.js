import React from 'react';

import { shallow, mount, configure } from 'enzyme';
//import Studenttimetable from './Studenttimetable';
import Roomtimetable from './Roomtimetable';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
it('validates inputs of faculty', () => {
	var wrapper = shallow(<Roomtimetable />);
	wrapper.find('[name="roomno"]').at(0).simulate('change', { target: { name: 'roomno', value: ' ' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['roomno']).toBe('Select roomno');
});

it('validates inputs of faculty', () => {
	var wrapper = shallow(<Roomtimetable />);

	wrapper.find('[name="roomno"]').at(0).simulate('change', { target: { name: 'roomno', value: 'A303' } });
	wrapper.find('[data-testid="submitbutton"]').at(0).simulate('click');
	// var data=1
	// expect(data).toBe(1)
	expect(wrapper.state().errors['roomno']).toBe('');
});
