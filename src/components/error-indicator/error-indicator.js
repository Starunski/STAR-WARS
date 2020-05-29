import React from "react";
import "./error-indicator.css";
import icon from './star-wars.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator " >
    
     <h5 className='boom'>  <img src={icon} className='icon-error' />   BOOM! </h5>
     <span>something has gone terribly wrong</span>
     <p>(but we already sent droids to fix it)</p>
    </div>
  );
};

export default ErrorIndicator;
