import React from 'react';
import PropTypes from 'prop-types';

const CalendarNav = (props) => {

  const months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];

  return (
    <div id="calendar-navigation" className="navigation">
      
      <div className="nav-left">
        <a className="decrement" onClick={ props.decrementMonth }>
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </a>      
      </div>
    
      <div className="nav-center">

        <select className="month-select" value={props.current.format('M')} onChange={ (event) => props.changeMonth(event.target.value) }>  
          {months.map( (month, index) => 
            <option key={index + 1} value={index + 1}>{month}</option>
          )}    
        </select>
        
        <select className="increment" className="year-select" value={props.current.format('Y')} onChange={ (event) => props.changeYear(event.target.value) }>   
          {[...Array(200).keys()].map(year => 
            <option key={1950 + year} value={1950 + year}>{1950 + year}</option>
          )}
        </select> 

      </div>

      <div className="nav-left">
        <a onClick={ props.incrementMonth }>
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </a>      
      </div>

    </div>
  );
  
}

CalendarNav.propTypes = { 
  current:        PropTypes.object.isRequired,
  decrementMonth: PropTypes.func.isRequired,
  incrementMonth: PropTypes.func.isRequired,
  changeMonth:    PropTypes.func.isRequired,
  changeYear:     PropTypes.func.isRequired
};

export default CalendarNav;