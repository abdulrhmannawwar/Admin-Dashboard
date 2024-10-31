import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const events = [
        {
            title: "All Day Event",
            allDay: true,
            start: new Date(2024, 9, 30),
            end: new Date(2024, 9, 30),
        },
        {
            title: "Long Event",
            start: new Date(2024, 9, 28),
            end: new Date(2024, 9, 30),
        },
        {
            title: "Conference",
            start: new Date(2024, 9, 29),
            end: new Date(2024, 9, 31),
        },
        {
            title: "Meeting",
            start: new Date(2024, 9, 31, 12, 30),
            end: new Date(2024, 9, 31, 13, 30),
        },
        {
            title: "Lunch",
            start: new Date(2024, 9, 31, 14, 0),
            end: new Date(2024, 9, 31, 15, 0),
        },
        {
            title: "Birthday Party",
            start: new Date(2024, 10, 1, 9, 0),
            end: new Date(2024, 10, 1, 10, 0),
        },
        {
            title: "Repeating Event",
            start: new Date(2024, 9, 26, 18, 0),
            end: new Date(2024, 9, 26, 19, 0),
            repeat: "weekly",
        },
    ];

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            views={["month", "week", "day"]}
            style={{ height: 500 }}
        />
    );
};

export default MyCalendar;
