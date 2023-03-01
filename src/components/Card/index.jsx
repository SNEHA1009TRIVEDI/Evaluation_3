import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas  } from "@fortawesome/free-solid-svg-icons";
import { far  } from "@fortawesome/free-regular-svg-icons";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from "@fortawesome/fontawesome-svg-core";
library.add(fas);
library.add(far);
const Card = (props) => {
  const { event } = props;
  // console.log(event);
  const circleCheckLookup: IconLookup = {
    prefix: "fas",
    iconName: "circle-check",
  };
  const circleCheckIconDefinition: IconDefinition =
    findIconDefinition(circleCheckLookup);
  const circleXmarkLookup: IconLookup = {
    prefix: "fas",
    iconName: "circle-xmark",
  };
  const circleXmarkIconDefinition: IconDefinition =
    findIconDefinition(circleXmarkLookup);
  let lookup = circleCheckIconDefinition;
  if (!event.areSeatsAvailable) {
    lookup = circleXmarkIconDefinition;
  }
  const bookmarkLookup: IconLookup = {
    prefix: "fas",
    iconName: "bookmark",
  };
  const bookmarkIconDefinition: IconDefinition =
    findIconDefinition(bookmarkLookup);
  const bookmarkRegularLookup: IconLookup = {
    prefix: "far",
    iconName: "bookmark",
  };
  const bookmarkRegularIconDefinition: IconDefinition =
    findIconDefinition(bookmarkRegularLookup);

    let bookmark = bookmarkIconDefinition;
  if(!event.isBookmarked){
    bookmark = bookmarkRegularIconDefinition;
  }


  return (
    <div className="card_container">
      <div className="card_image">
        <img src={event.imgUrl} alt="event" className="image"/>
      </div>
      <div className="card_content">
        <div className="card_title">
          <h3 className="title">{event.name}</h3>
          <p className="description">{event.description}</p>
        </div>
        <div className="venue">
          <p>
            <strong>Venue:</strong>
            {event.venue}
          </p>
          <p>
            <strong>Date:</strong>
            {event.datetime}
          </p>
        </div>
        <div className="card_footer">
          {/* <img src={iconCheck} alt="" /> */}
          <FontAwesomeIcon icon={lookup} />
          <FontAwesomeIcon icon={bookmark} />
          {/* <FontAwesomeIcon icon="fa-solid fa-circle-xmark" /> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
