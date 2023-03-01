//create a header component
import React from "react";
import Filter from "../Filter/index.jsx";
import Card from "../Card/index.jsx";
import makeRequest from "../../utils/makeRequest/index.js";
import "./Body.css";

const Body = () => {
  const [eventsData, setEvents] = React.useState(null);

  React.useEffect(() => {
    makeRequest("GET", "http://localhost:8000/api/events")
      .then((res) => {
        // console.log(res);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(events);

  return (
    <>
      <Filter />
      <div className="body_container">
        {eventsData ? (
          eventsData.map((event, idx) => <Card key={idx} event={event} />)
        ) : (
          <div data-testid="loading-screen">Loading!!!</div>
        )}
      </div>
    </>
  );
};
export default Body;
