import React from "react";
import "./Card.css";
import { getFormattedDateFromUtcDate } from "../../utils/commons/index";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faBookmark,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import makeRequest from "../../utils/makeRequest";
import EventDetails from "../EventDetails";
const Card = (props) => {
  const [filter, setFilter] = React.useState(false);
  const [registerEvent, setRegisterEvent] = React.useState(props.isRegistered);

  const { event } = props;
  console.log(event);
  const [isBookmarked, setIsBookmark] = React.useState(event.isBookmarked);

  // console.log(event);
  const navigate = useNavigate();
  const eventHandler = () => {
    setFilter(!filter);
    console.log(filter);
  };
  if (filter) {
    return <EventDetails id={event.id} data={event} />;
  }

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

  const registerHandler = () => {
    if (registerEvent) {
      makeRequest(
        "PATCH",
        `http://localhost:8000/api/events/${event.id}`,
        false,
        false
      )
        .then((res) => {
          setRegisterEvent(!registerEvent);
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
          setRegisterEvent(!registerEvent);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  let circleCheck;
  if (event.isRegistered) {
    circleCheck = faCircleCheck;
  }
  if (!event.areSeatsAvailable) {
    circleCheck = faCircleXmark;
  }

  return (
    <div className="card_container">
      <div className="card_image">
        <img
          src={event.imgUrl}
          alt="event"
          className="image"
          onClick={() => {
            eventHandler();
          }}
        />
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
            {getFormattedDateFromUtcDate(event.datetime)}
          </p>
        </div>
        <div className="card_footer">
          <FontAwesomeIcon
            icon={circleCheck}
            className={registerEvent ? "checked" : "unchecked"}
            onClick={registerHandler}
          />
          <span className="register">Registered</span>

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
