import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';

import './Calendar.css';

import CalendarNav from './CalendarNav';
import CalendarGrid from './CalendarGrid';

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    
    let today = moment();

    this.state = {
      today: today,
      current: this.processURL(today.clone()),
      dates: []
    };

    this.incrementMonth = this.incrementMonth.bind(this);    
    this.decrementMonth = this.decrementMonth.bind(this);   
    this.changeMonth    = this.changeMonth.bind(this);    
    this.changeYear     = this.changeYear.bind(this);     
  }

  componentWillMount() {  
    this.generateDates();
  }

  processURL(today) {
          
    let urlData = this.props.match;
    let selectedDate;

    if (urlData.path === '/') {
      selectedDate = today.clone();
    } else if (urlData.path === '/:year') {
      selectedDate = moment(urlData.params.year, `YYYY`); 
    } else {
      selectedDate = moment(urlData.params.year + urlData.params.month, `YYYYMM`);
    }

    return selectedDate;
  }

  generateDates() {
    let dates = [],
        weekNumber = 0,
        firstDayOfTheMonth = this.state.current.clone().startOf(`month`).startOf(`week`);

    while(dates.length < 42) { 

      if ( firstDayOfTheMonth.format('ddd') === 'Mon' ) { weekNumber++; }
      
      dates.push({ 
        date: firstDayOfTheMonth.date(),
        week: weekNumber,
        day: firstDayOfTheMonth.day(),
        inMonth: (firstDayOfTheMonth.clone().month() === this.state.current.clone().month()) ? 1 : 0,
        isToday: (firstDayOfTheMonth.clone().startOf('date').diff(moment().startOf('date')) === 0) ? 1 : 0
      });
      
      firstDayOfTheMonth.add(1, 'days');
    }
    
    this.setState({ dates: dates });
  }
  
  setUrl(date) {
    let url = date.format(`/YYYY/MM`);
    this.props.history.push(url);
  }

  updateMonthView(newMonth) {
    this.setState({ current: newMonth }); 
    this.setUrl(newMonth);
    this.generateDates();
  }

  incrementMonth() {
    let newMonth = this.state.current.add(1,'month');
    this.updateMonthView(newMonth);
  }

  decrementMonth() {
    let newMonth = this.state.current.subtract(1,'month');
    this.updateMonthView(newMonth);
  }

  currentDate() {
    let today = this.state.current.year(this.state.today.year()).dayOfYear(this.state.today.dayOfYear());
    this.updateMonthView(today);   
  }

  changeMonth(month) {
    let newMonth = this.state.current.month(month-1);
    this.updateMonthView(newMonth)
  }

  changeYear(year) {
    let newYear = this.state.current.year(year);
    this.updateMonthView(newYear);
  }

  render() {
    return (
      <div className="calendar">
        <CalendarNav
          current={ this.state.current }
          decrementMonth={ this.decrementMonth }
          incrementMonth={ this.incrementMonth }
          changeMonth={ this.changeMonth }
          changeYear={ this.changeYear }
        />
        <CalendarGrid dates={this.state.dates}/>
      </div>
    );
  }
}

export default Calendar;