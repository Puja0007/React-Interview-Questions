import React, { useState } from 'react';

// Parent component
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  // Pass state and handler function to children using React.cloneElement
  const tabItems = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActive: activeTab === index,
      onClick: () => handleClick(index)
    })
  );

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        {tabItems}
      </div>
      {children[activeTab]}
    </div>
  );
};

// Child component for individual tab
const Tab = ({ isActive, onClick, label }) => {
  return (
    <button onClick={onClick} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
      {label}
    </button>
  );
};

// Usage
const App = () => {
  return (
    <Tabs>
      <Tab label="Tab 1">Content for Tab 1</Tab>
      <Tab label="Tab 2">Content for Tab 2</Tab>
      <Tab label="Tab 3">Content for Tab 3</Tab>
    </Tabs>
  );
};

export default App;
