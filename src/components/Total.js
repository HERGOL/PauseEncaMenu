import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Total() {
  return (
    <div className="total">
      <span className="total-title">
        Pour toutes informations, l'équipe Pause Encas est à votre disposition.
      </span>
      <div className="social-icons">
        <a href="https://www.instagram.com/pause_encas/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" size={25} color="#ba5f01"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100083250464756" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" size={25} color="#ba5f01"/>
        </a>
      </div>
    </div>
  );
}