import { useState } from "react";

const AddEvent = (props) => {

    //This is my state with the initial values empty
    const [event, setEvent] = useState({ title: "", location: "", eventtime: "" })
    //This is my data
    //{title: 'Women', location: 'Overland'. eventtime: "2023-03-29T07:00:00.000Z"}

    const handleTitleChange = (e) => {
        e.preventDefault();
        let newTitle = e.target.value;
        setEvent((event) => ({ ...event, title: newTitle }));
       

    }
    const handleLocationChange = (e) => {
        e.preventDefault();
        let newLocation = e.target.value;
        setEvent((event) => ({ ...event, location: newLocation }));
       
    }
    const handleDateChange = (e) => {
        e.preventDefault();
        let newDate = e.target.value;
        setEvent((event) => ({ ...event, eventtime: newDate }));
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEvent(event);
        props.postRequest(event);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                id="add-event-title"
                placeholder="The Title of your Event"
                required
                value={event.title}
                onChange={handleTitleChange}
            />
            <label>Place</label>
            <input
                type="text"
                id="add-event-location"
                placeholder="The Location of your Event"
                required
                value={event.location} 
                onChange={handleLocationChange}
            />
            <label>Date</label>
            <input
                type="date"
                id="add-event-date"
                value={event.eventtime} 
                onChange={handleDateChange}
            />
            <button type="submit" className="addButton">Add Event</button>
        </form>
    )

}

export default AddEvent;