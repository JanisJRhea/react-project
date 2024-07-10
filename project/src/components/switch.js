import React, { useState } from 'react';

const ConditionalSwitch = () => {
  const [tab, setTab] = useState('home');

  let tabContent;
  switch (tab) {
    case 'home':
      tabContent = <div><h1>Home Tab</h1><p>Welcome to the Home Tab!</p></div>;
      break;
    case 'about':
      tabContent = <div><h1>About Tab</h1><p>Learn more about us!</p></div>;
      break;
    case 'contact':
      tabContent = <div><h1>Contact Tab</h1><p>Get in touch with us.</p></div>;
      break;
    default:
      tabContent = <div><h1>404 Not Found</h1><p>Page not found.</p></div>;
  }

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleTabChange('home')}>Home</button>
        <button onClick={() => handleTabChange('about')}>About</button>
        <button onClick={() => handleTabChange('contact')}>Contact</button>
      </nav>
      <div>
        {tabContent}
      </div>
    </div>
  );
};

export default ConditionalSwitch;
