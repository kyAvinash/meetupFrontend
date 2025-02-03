import { useState } from "react";
import RenderAllEvent from "./RenderAllEvent";
import RenderEventByType from "./RenderEventByType";

const FetchEventsData = () => {
  const [selectedEventType, setSelectedEventType] = useState("All");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 text-md-start text-center mb-2 mb-md-0">
            <h2>Meetup Events</h2>
          </div>
          <div className="col-12 col-md-6 text-md-end text-center">
            <select
              className="form-select-sm"
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
            >
              <option value="All">Select Event Type</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Both">Both</option>
            </select>
          </div>
        </div>

        <div className="row">
          {selectedEventType === "All" ? (
            <RenderAllEvent />
          ) : (
            <RenderEventByType eventType={selectedEventType} />
          )}
        </div>
      </div>
    </>
  );
};

export default FetchEventsData;
