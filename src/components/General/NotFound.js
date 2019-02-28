import React from "react";
import { Link } from "react-router-dom";

import "../../css/Notfound.css";
const NotFound = () => {
  return (
    <div className="error-page">
      <h2>Oops!</h2>
      <h1 className="error404"> 404 </h1>
      <h2>Not Found</h2>
      <div className="error-details">
        Sorry, an error has occured. Requested page not found!
      </div>

      <div className="error-actions">
        <Link to="/" className="btn btn-primary btn-lg">
          <span className="fas fa-home" />
          Home
        </Link>
        <Link to="/contact" className="btn btn-info btn-lg">
          <span className="fas fa-envelope" /> Contact Support
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
