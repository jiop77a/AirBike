import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const bikeLogo = 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1502836769/Repair_grey_rz0bky.jpg'

const linkedIn = 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1502836914/linkedin-logo-copy_miy0hz.png'

const gitHub = 'https://res.cloudinary.com/dol1mm8bd/image/upload/v1502836925/icons8-GitHub-64_wdf2p9.png'

export const Footer = () => (
  <section className="footer">
    <div className="footer-content">
      <div className="column-section">
        <div className="column-one">
          <p className="column-name">AirBike</p>
          <Link to="" className="footer-link">About us</Link>
          <Link to="" className="footer-link">Careers</Link>
          <Link to="" className="footer-link">Press</Link>
          <Link to="" className="footer-link">Policies</Link>
          <Link to="" className="footer-link">Help</Link>
          <Link to="" className="footer-link">Diversity & Belonging</Link>
        </div>
        <div className="column-two">
          <p className="column-name">Building</p>
          <Link to="" className="footer-link">Why Build</Link>
          <Link to="" className="footer-link">Hospitality</Link>
          <Link to="" className="footer-link">Responsible Building</Link>
          <Link to="" className="footer-link">Community Center</Link>
        </div>
      </div>
      <div className="footy-foot">
        <div className="footy-left">
          <img src={bikeLogo}/><p>AirBike</p>
        </div>
        <div className="footy-right">
          <img src={linkedIn}/>
          <img src={gitHub}/>
        </div>
      </div>
    </div>
  </section>
);
