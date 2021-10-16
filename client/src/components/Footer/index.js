import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Footing } from "./footerelement.js"
const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer>

      {location.pathname !== '/' && (
        <button
          className="btn btn-dark mb-3"
          onClick={() => history.goBack()}
        >
          &larr; Go Back
        </button>
      )}
      <Footing >
        <p >Copyright © 2021  State of Washington  All rights reserved. </p>
      </Footing>

    </footer>
  );
};

export default Footer;
