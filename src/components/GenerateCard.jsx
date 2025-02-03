import { NavLink } from "react-router-dom";

const GenerateCard = ({ data, loading, error }) => {
  return (
    <>
      {loading && <h6>Loading...</h6>}
      {data?.length > 0 ? (
        data.map((event) => (
          <div key={event._id} className="col-md-4 mt-3">
            <NavLink to={`/event-details/${event._id}`} className="nav-link">
              <div className="card">
                <img
                  src={event.thumbnail}
                  className="card-img-top img-fluid mx-auto"
                  alt={event.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <div
                  className={`badge badge-primary ${
                    event.type === "Online"
                      ? "bg-success"
                      : event.type === "Offline"
                        ? "bg-danger"
                        : "bg-warning"
                  } position-absolute top-0 start-0`}
                >
                  <h6>
                    {event.type === "Both"
                      ? "Online/Offline Event"
                      : event.type + " Event"}
                  </h6>
                </div>
                <div className="card-body">
                  <h6 className="card-title">
                    {event.title} : Revised with {event.topics} | {event.venue}
                  </h6>
                  {event.sessionTimings && (
                    <p>&#128198; {event.sessionTimings.startTime}</p>
                  )}
                  <p>&#127968; {event.address}</p>
                  <p>&#8377; Price: {event.pricing} ONWARDS</p>
                </div>
              </div>
            </NavLink>
          </div>
        ))
      ) : (
        <div className="col-md-12 mt-3">
          <p>No events found.</p>
        </div>
      )}
    </>
  );
};

export default GenerateCard;
