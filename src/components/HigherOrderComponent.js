import React, { useState } from 'react';

// Higher Order Component (HOC) for authentication
const withAuthentication = (WrappedComponent) => {
  // Return a new functional component
  return function WithAuthentication(props) {
    // State to manage authentication status
    const [authenticated, setAuthenticated] = useState(false);

    // Function to toggle authentication status
    const toggleAuthentication = () => {
      setAuthenticated(!authenticated);
    };

    // Render the WrappedComponent with authentication props
    return (
      <WrappedComponent
        {...props}
        authenticated={authenticated}
        toggleAuthentication={toggleAuthentication}
      />
    );
  };
};

// Example functional component that uses authentication
const UserProfile = ({ authenticated, toggleAuthentication }) => {
  return (
    <div>
      {authenticated ? (
        <p>Welcome, User! <button onClick={toggleAuthentication}>Logout</button></p>
      ) : (
        <p>Please login to view your profile. <button onClick={toggleAuthentication}>Login</button></p>
      )}
    </div>
  );
};

// Enhance UserProfile with withAuthentication HOC
const EnhancedUserProfile = withAuthentication(UserProfile);

export default EnhancedUserProfile;
