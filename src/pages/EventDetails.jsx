import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const EventDetails = () => {
  const eventId = useParams();
  const { data, loading, error } = useFetch(
    `https://meet-up-bay.vercel.app//events/${eventId.eventId}`,
  );
  return (
    <>
      <Header />
      <main className="container py-3">
        {data && (
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <img
                  src={data.thumbnail}
                  className="card-img-top img-fluid mx-auto"
                  alt={data.title}
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">
                    &#128073; {data.title} | {data.venue}
                    <br />
                    <br />
                    &#128187; Revised with {data.topics}
                    <br />
                    <br />
                    &#127968; {data.address}
                    <br />
                    <br />
                    &#128198;Start: {data.sessionTimings.startTime} <br />
                    <br /> &#128365;End: {data.sessionTimings.endTime}
                    <br />
                    <br />
                    &#8377; Price: {data.pricing} ONWARDS
                  </h6>
                  <br />
                  <h6 className="card-subtitle mb-2 text-muted">Event Tags:</h6>
                  {data.tags.map((tag, index) => (
                    <span key={index}>
                      &#9873; {tag}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <h1>&#128209; About</h1>
              <section className="mt-4">
                <h4>&#128071; Event Guide</h4>
                <p>
                  &#128084; <strong>Dress Code:</strong>{" "}
                  {data.additionalInfo[0].dressCode}
                </p>
                <p>
                  &#128370; <strong>Age Restrictions:</strong>{" "}
                  {data.additionalInfo[0].ageRestriction}
                </p>
                <p>
                  &#127908; <strong>Mode Of Event:</strong> {data.type}
                </p>
              </section>
              <section className="mt-4">
                <h4>&#128222; Invite your friends</h4>
                <p>and enjoy a shared experience &#128525;</p>
              </section>
            </div>

            <div className="col-md-12 mt-4">
              <h1>&#128204; About the Event</h1>
              <section className="mt-4">
                <p>{data.description}</p>
              </section>
            </div>

            <div className="col-md-12 mt-4">
              <h1>&#127968; Venue</h1>
              <section className="mt-4">
                <p>{data.venue},</p>
                <p>{data.address}</p>
              </section>
            </div>

            <div className="col-md-12 mt-4">
              <h1>&#128110; Speakers: ({data.speakers.length})</h1>
              <section className="mt-4">
                <div className="row">
                  {data.speakers.map((speaker) => (
                    <div key={speaker._id} className="col-md-6 mt-3">
                      <div className="card">
                        <img
                          src={speaker.image}
                          className="rounded-circle img-thumbnail img-fluid mx-auto auto-fit"
                          alt={`speaker-${speaker.name} Image`}
                          style={{
                            width: "300px",
                            height: "300px",
                            objectFit: "cover",
                          }}
                        />
                        <div className="card-body text-center">
                          <h4 className="card-title">{speaker.name}</h4>
                          <p className="card-text">{speaker.bio}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
