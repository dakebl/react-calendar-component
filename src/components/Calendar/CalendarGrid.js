import React from 'react';

const CalendarGrid = (props) => {

  let weeks = [1,2,3,4,5,6];
  
  return (
    <div id="calendar-grid">
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

export default CalendarGrid;