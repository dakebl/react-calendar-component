import React from 'react';

import CalendarNav from './CalendarNav';
import CalendarGrid from './CalendarGrid';

class Calendar extends React.Component {
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