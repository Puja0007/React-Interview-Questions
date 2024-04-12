// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyComponent from './MyComponent';
import AnotherComponent from './AnotherComponent'; // Import other components as needed

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/my-component" component={MyComponent} />
        {/* Define routes for other components */}
      </Switch>
    </Router>
  );
};

export default App;

import { Link } from 'react-router-dom';

const MyComponent = () => {
  return (
    <Link to="/path?param1=value1&param2=value2">Go to Route with Query Params</Link>
  );
};
import React from 'react';
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  // Get the current location object using useLocation hook
  const location = useLocation();
  
  // Access query parameters from location.search
  const queryParams = new URLSearchParams(location.search);
  const param1 = queryParams.get('param1');
  const param2 = queryParams.get('param2');

  return (
    <div>
      <h2>MyComponent</h2>
      <p>Param1: {param1}</p>
      <p>Param2: {param2}</p>
    </div>
  );
};

export default MyComponent;
