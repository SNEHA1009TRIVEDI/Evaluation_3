import React from "react";
import "./EventDetails.css";
import Headers from "../Header";
import Footer from "../Footer";
import Card from "../Card";
import EventFilter from "../EventFilter/index";

const EventDetails = ({ id, data }) => {
  console.log(id);
  return (
    <>
      <Headers />
      <EventFilter key={id} event={data} />
    </>
  );
};
export default EventDetails;
