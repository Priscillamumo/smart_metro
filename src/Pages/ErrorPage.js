import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css'; // Import the CSS file for styling

const ErrorPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // Navigate back to the home page (or login page)
  };

  return (
    <div className="error-page-container">
      <div className="error-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button onClick={goHome}>Go Back to Home</button>
      </div>
    </div>
  );
};

export default ErrorPage;