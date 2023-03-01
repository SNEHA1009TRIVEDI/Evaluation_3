//create a header component
import React from "react";
import "./Filter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
const Filter = () => {
  return (
    <div className='body_filter'>
    <div className='filter_header'>
      <div className='filter'>
        <span className='filter_content'>
          <FontAwesomeIcon icon={faFilter} />
          <span> Filter </span>
          <FontAwesomeIcon icon={faChevronUp} />
        </span>
      </div>
      <div className='search'>
        <div className='search_header'>
          <input type='text' placeholder='Event Name' />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
    <div className='filter_buttons'>
      <div className='filter_buttons_level'>
        <div className='filter_buttons_content'>
          <FontAwesomeIcon icon={faCircleDot} />
          <p>All</p>
        </div>
        <div className='filter_buttons_content'>
          <p>Bookmarked</p>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
      <div className='filter_buttons_level'>
        <div className='filter_buttons_content'>
          <FontAwesomeIcon icon={faCircle} />
          <p> Registered </p>
        </div>
        <div className='filter_buttons_content'>
          <p> Seats Available </p>
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  </div>
    );

};
export default Filter;
