import React, { useState } from 'react';
import '../../css/Account.css';
import EventPage from '../Events/EventPage';
import { useQuery } from '@apollo/react-hooks';
import { EVENTS } from '../../utils/queries';

function Events(props) {

  const {
    user_me
  } = props

  const [UserEvent] = useState(user_me.events)
  const [currentEvent, setCurrentEvent] = useState(UserEvent[0]);
  const { loading, data } = useQuery(EVENTS);
  const all_events = data?.events || {};

  if (loading) return `...Loading`;

  return (
    <div className="events-container">
      <span>My Events</span>
      <div>
        <div className="event-list">
          {user_me.events.map((event) => (
            <span onClick={() => {setCurrentEvent(event)}} className="event-button" key={event.event_name}>{event.event_name} <b>></b></span>
          ))}          
        </div>
        <div className="event-display">
          <EventPage 
            currentEvent={currentEvent}
            all_events={all_events} />
        </div>

      </div>
    </div>
  )
}

export default Events;