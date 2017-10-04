import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calendar from './components/Calendar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Calendar Component</h1>
          {["/", "/:year", "/:year/:month"].map((path, index) => 
            <Route key={index} exact path={path} component={Calendar} />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
