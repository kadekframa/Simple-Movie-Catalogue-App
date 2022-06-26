import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="text-white">
    <div className="data-source d-flex text-center align-items-center justify-content-center">
      &copy;<span className="mx-2">All Data Source is Obtained from TMDB API</span>
    </div>
      <div className="footer__bottom d-flex text-center align-items-center justify-content-center">
        &copy; 2022 <span className="mx-2">Simple Movie Catalogue App || Created By: Kadek Frama Danamastyana</span>
      </div>
    </footer>
  )
}

export default Footer;
