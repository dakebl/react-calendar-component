import React from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';

import CalendarNav from './CalendarNav';
import CalendarGrid from './CalendarGrid';

class Calendar extends React.Component {
  constructor(props) {
    super(props)

    let today = moment();

    this.state = {
      today: today
    };

  }
  render() {
    return (
      <div className="Calendar">
        <CalendarNav/>
        <CalendarGrid/>
      </div>
    );
  }
}

export default Calendar;