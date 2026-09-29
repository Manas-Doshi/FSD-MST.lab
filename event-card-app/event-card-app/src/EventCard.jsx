import React from "react";

function EventCard({ title }) {
  // Runs only when EventCard actually renders
  console.log("EventCard rendered:", title);

  return (
    <div className="card">
      <h3>{title}</h3>
    </div>
  );
}

// React.memo skips re-rendering when props are unchanged
export default React.memo(EventCard);
