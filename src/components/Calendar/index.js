import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';

import CalendarNav from './CalendarNav';
import CalendarGrid from './CalendarGrid';

class Calendar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      today: moment(),
      current: moment(),
      dates: []
    };

  }

  componentWillMount() {  
    this.generateDates();
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

    console.log(dates);
    
    this.setState({ dates: dates });
  }

  render() {
    return (
      <div className="Calendar">
        <CalendarNav/>
        <CalendarGrid dates={this.state.dates}/>
      </div>
    );
  }
}

export default Calendar;