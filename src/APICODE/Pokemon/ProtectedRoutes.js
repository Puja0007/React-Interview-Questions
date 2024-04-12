// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  const isAuthenticated = true; // Assume the user is authenticated for this example

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        {/* Protected route */}
        <PrivateRoute path="/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
      </div>
    </Router>
  );
};

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

export default App;
