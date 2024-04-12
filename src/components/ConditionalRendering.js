//Using if statements or ternary operators in JSX
const App = ({ isLoggedIn }) => {
    return (
      <div>
        {isLoggedIn ? <LoggedInComponent /> : <LoginComponent />}
      </div>
    );
  };
//Using logical && operator
const App1 = ({ isLoggedIn }) => {
    return (
      <div>
        {isLoggedIn && <LoggedInComponent />}
      </div>
    );
  };
  //Using if-else statements outside of JSX
  const App2 = ({ isLoggedIn }) => {
    let content;
    if (isLoggedIn) {
      content = <LoggedInComponent />;
    } else {
      content = <LoginComponent />;
    }
    return <div>{content}</div>;
  };
  //Using switch-case statements
  const App3 = ({ page }) => {
    switch (page) {
      case 'home':
        return <HomeComponent />;
      case 'about':
        return <AboutComponent />;
      case 'contact':
        return <ContactComponent />;
      default:
        return <NotFoundComponent />;
    }
  };
  //Using conditional rendering within components
  const MyComponent = ({ isDataLoaded }) => {
    if (!isDataLoaded) {
      return <LoadingComponent />;
    }
    return <DataComponent />;
  };
  
  
  
  