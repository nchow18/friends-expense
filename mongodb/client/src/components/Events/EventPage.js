import React from 'react';

function EventPage(props) {

  const {
    currentEvent,
    all_events
  } = props

  console.log(all_events);
  console.log(currentEvent);

  var event_display = [];

  for (var i = 0; i < all_events.length; i++) {
    if (currentEvent.event_id === all_events[i].event_id) {
      event_display = all_events[i];
    }
  }

  console.log(event_display);

  return (
    <div className="event-page">
      <span>Event ID - {currentEvent.event_id}</span>
      <div className="event-details">
        <span>{event_display.title}</span>
        <span>{event_display.notes}</span>
        <span>${event_display.total_cost}</span>
      </div>
    </div>
  )
}

export default EventPage;