import React from 'react';
import { shallow, mount } from 'enzyme';
import Calendar from './index.js';
import moment from 'moment';

describe('rendering', () => {
  let wrapper;
  let matchProps = {
    path: '/',
    params: {}
  };

  beforeEach(() => {
    wrapper = shallow(<Calendar match={matchProps} />);
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
      wrapper = mount(<Calendar match={matchProps} />);

      let amountOfOverflowDays = wrapper.state('dates').filter( date => {
        return (!date.inMonth);
      });

      expect(wrapper.find('.overflow')).toHaveLength(amountOfOverflowDays.length); 
    });
  });
});

describe('interaction', () => {
  describe('Selecting a month from the dropdown', () => {
    it('should update the month view to the selected month')
  });
  describe('Selecting a year from the dropdown', () => {
    it('should update the month view to the selected year')
  });
  describe('Clicking the left arrow', () => {
    it('should decrement the month view')
  });
  describe('Clicking the right arrow', () => {
    it('should increment the month view')
  });
});