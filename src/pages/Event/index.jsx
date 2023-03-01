import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import EventDetails from "../../components/EventDetails";
import Body from "../../components/Body";
import EventFilters from "../../components/EventFilter";
const Event = () => {
  return (
    <div className="App">
      <Header />
      <EventFilters />
      <Footer />
    </div>
  );
};

export default Event;
