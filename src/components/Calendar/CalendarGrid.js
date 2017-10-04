import React from 'react';
import PropTypes from 'prop-types';

const CalendarGrid = (props) => {

  let weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];  
  let weeks = [1,2,3,4,5,6];
  
  return (
    <div id="calendar-grid">
      <div className="week weekdays">
        {weekdays.map( weekday => 
          <div key={weekday} className="weekday">{weekday}</div> 
        )}          
      </div>

      {weeks.map(week =>
        <div key={week} className="week">
          {props.dates.map(date =>    
            (date.week === week) ? <div key={date.date} className={['day', date.inMonth ? '' : ' overflow', date.isToday ? ' today' : ''].join('')}>{date.date}</div> : ''   
          )}
        </div>
      )}
    </div>
  );
}

CalendarGrid.propTypes = { 
  dates: PropTypes.array.isRequired 
};

export default CalendarGrid;