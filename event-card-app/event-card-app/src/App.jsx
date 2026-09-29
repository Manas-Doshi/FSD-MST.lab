import React, { useState } from "react";
import EventCard from "./EventCard.jsx";

// Defined outside the component so the array reference stays stable
const events = [
  { id: 1, title: "React Workshop" },
  { id: 2, title: "Hackathon 2026" },
  { id: 3, title: "Tech Talk: AI & ML" },
];

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Events</h1>

      {events.map((event) => (
        <EventCard key={event.id} title={event.title} />
      ))}

      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>
      <p className="hint">
        Open the browser console (F12). Clicking the counter re-renders the
        parent, but EventCard does not log again.
      </p>
    </div>
  );
}
