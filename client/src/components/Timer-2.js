import React from 'react';
import { useState, useEffect } from 'react';

function Apple() {
    const [seconds, setSeconds] = React.useState(20);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds + 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    });
  
    return (
      <div className="App">
        <div>
          {seconds}
        </div>
      </div>
    );
  }

  export default Apple;