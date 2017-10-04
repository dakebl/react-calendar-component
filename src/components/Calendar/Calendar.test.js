import React from 'react';
import { shallow, mount } from 'enzyme';
import Calendar from './index.js';
import moment from 'moment';

describe('rendering', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      path: '/',
      params: {}
    };
    wrapper = shallow(<Calendar match={props} />);
  });

  it('should render a <CalendarNav/>', () => {
    expect(wrapper.find('CalendarNav')).toHaveLength(1);
  });

  it('should render a <CalendarGrid/>', () => {
    expect(wrapper.find('CalendarGrid')).toHaveLength(1);
  });

  describe('<CalendarGrid/>', () => {
    it('should contain 42 days', () => {
      expect(wrapper.state('dates')).toHaveLength(42);
    });
  });
  
  describe('Default view', () => {
    it('should display the current month', () => {
      expect(moment(wrapper.state('current')).startOf('day')).toMatchObject(moment().startOf('day'));
    });
  });
  
  describe('Overflow days', () => {
    it('should have the overflow style', () => {
      wrapper = mount(<Calendar match={props} />);

      let amountOfOverflowDays = wrapper.state('dates').filter( date => {
        return (!date.inMonth);
      });

      expect(wrapper.find('.overflow')).toHaveLength(amountOfOverflowDays.length); 
    });
  });
});

// TODO: Fix the four interaction tests below. There seems to be a problem with the .push to history in setUrl()

// describe('interaction', () => {
//   let wrapper, props, today;

//   function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
//   }

//   beforeEach(() => {
//     props = {
//       path: '/',
//       params: {}
//     };
//     wrapper = mount(<Calendar match={props} />);
//     today = moment();
//   });

//   describe('Selecting a month from the dropdown', () => {
//     it('should update the month view to the selected month', () => {
//       let randomMonth = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
//       let newDate = moment(randomMonth, 'M').format('M');

//       wrapper.find('.month-select').simulate('change', {target: {value: newDate}});
      
//       expect(wrapper.props().match.path).toEqual(newDate.format('/YYYY/MM'));
//     })
//   });
  
//   describe('Selecting a year from the dropdown', () => {
//     it('should update the month view to the selected year', () => {     
//       let randomYear = Math.floor(Math.random() * (2050 - 1950 + 1)) + 1;
//       let newDate = moment(randomMonth, 'YYYY').format('YYYY');

//       wrapper.find('.year-select').simulate('change', {target: {value: newDate}});
      
//       expect(wrapper.props().match.path).toEqual(newDate.format('/YYYY/MM'));
//     })
//   });

//   describe('Clicking the left arrow', () => {
//     it('should decrement the month view', () => {
//       wrapper.find('.decrement').simulate('click');
//       expect(wrapper.props().match.path).toEqual(today.subtract(1, 'month').format('/YYYY/MM'));
//     })
//   });

//   describe('Clicking the right arrow', () => {
//     it('should increment the month view', () => {     
//       wrapper.find('.increment').simulate('click');
//       expect(wrapper.props().match.path).toEqual(today.add(1, 'month').format('/YYYY/MM'));
//     })
//   });
// });
