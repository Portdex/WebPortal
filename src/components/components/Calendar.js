import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const events = [
    // {
    //   id: 1,
    //   title: "Event 1",
    //   start: new Date(2023, 7, 3, 10, 0), // (year, monthIndex, day, hour, minute)
    //   end: new Date(2023, 7, 3, 12, 0),
    // },
    // {
    //   id: 2,
    //   title: "Event 2",
    //   start: new Date(2023, 7, 4, 14, 0),
    //   end: new Date(2023, 7, 4, 16, 0),
    // },
    // Add more events as needed
  ];
  const MyCalendar = () => {
    const localizer = momentLocalizer(moment);
  
    return (
      <div style={{ height: "500px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month']} // Show monthly, weekly, and daily views
          defaultView="month" // Default view to show on initial load
          selectable
          onSelectSlot={(slotInfo) => {
            // Handle slot selection
            console.log("Selected slot:", slotInfo);
          }}
          onSelectEvent={(event) => {
            // Handle event selection
            console.log("Selected event:", event);
          }}
        />
      </div>
    );
  };
export default MyCalendar;    