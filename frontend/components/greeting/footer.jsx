import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export const Footer = () => (
  <section className="footer">
    <div className="footer-content">
      <div className="column-section">
        <div className="column-one">
          <p>AirBike</p>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
        </div>
        <div className="column-two">
          <p>Discover</p>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
          <Link to="" className="footer-link">Lorem!</Link>
        </div>
      </div>
      <div className="footy-foot">
        <p>Footy-foot is working</p>
      </div>
    </div>
  </section>
);
