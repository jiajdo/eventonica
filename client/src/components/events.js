import { useState, useEffect } from "react";
import EventCard from "./event";
import CardGroup from "react-bootstrap/CardGroup";
import AddEvent from "./addevent";
import DeleteEvent from "./deleteevent";

function Events() {
  const [events, setEvents] = useState([]);

  const getRequest = () => {
    fetch("http://localhost:8080/api/events")
      .then((response) => response.json())
      .then((events) => {
        setEvents(events);
        console.log("Events fetched...", events);
      });
  };

  useEffect(() => {
    getRequest();
  }, []);

  const postAddRequest = (newEvent) => {
    //console.log("From the parent", newEvent);
    return fetch("http://localhost:8080/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the front", data);
        setEvents((events) => [...events, data]);
      });
  };

  const postDeleteRequest = (newEvent) => {
    //console.log("From the parent", newEvent);
    return fetch("http://localhost:8080/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("From the front", data);
        setEvents((events) => [...events, data]);
      });
  };

  if (events.length === 0) {
    return <div>Loading...</div>;
  }
  console.log({ events });
  return (
    <div>
      <CardGroup className="Events">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            time={event.eventtime}
          />
        ))}
      </CardGroup>
      <AddEvent postRequest={postAddRequest} />
      <DeleteEvent postRequest={postDeleteRequest} />
    </div>
  );
}

export default Events;
