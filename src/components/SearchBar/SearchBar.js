// You do not need to change any code in this file for MVP

import "./SearchBar.css";

import {
  faCircle,
  faCompass,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SearchBar = ({ searchTerm, inputChange }) => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input type="text" placeholder="Search" onChange={inputChange} />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
