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

describe('interaction', () => {
  let wrapper, props, today;

  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  randomDate(new Date(2012, 0, 1), new Date())

  beforeEach(() => {
    props = {
      path: '/',
      params: {}
    };
    wrapper = mount(<Calendar match={props} />);
    today = moment();
  });

  describe('Selecting a month from the dropdown', () => {
    it('should update the month view to the selected month', () => {
      let nextMonth = today.clone().month().add;
      wrapper.find('.month-select').simulate('change', {target { value : }});
      expect(wrapper.find('.month-select').length).to.equal(1);
    })
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
