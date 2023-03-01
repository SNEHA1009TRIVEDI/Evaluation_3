import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faBookmark } from "@fortawesome/free-solid-svg-icons";
import makeRequest from "../../utils/makeRequest";

const Card = (props) => {
  const { event } = props;
  const [isBookmarked, setIsBookmark] = React.useState(event.isBookmarked);

  // console.log(event);
  const bookmarkHandler = () => {
    if (isBookmarked) {
      makeRequest(
        "PATCH",
        `http://localhost:8000/api/events/${event.id}`,
        false,
        false
      )
        .then((res) => {
          setIsBookmark(!isBookmarked);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      makeRequest(
        "PATCH",
        `http://localhost:8000/api/events/${event.id}`,
        true,
        true
      )
        .then((res) => {
          setIsBookmark(!isBookmarked);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="card_container">
      <div className="card_image">
        <img src={event.imgUrl} alt="event" className="image" />
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
          <FontAwesomeIcon icon={faCircleCheck} />

          <FontAwesomeIcon
            icon={faBookmark}
            className={isBookmarked ? "bookmarked" : "unmarked"}
            onClick={bookmarkHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
