import React from "react";
import { useNavigate } from "react-router-dom";
import './Error.css';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default Error;
