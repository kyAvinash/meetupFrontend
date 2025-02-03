import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import FetchEventsData from "./components/FetchEventsData";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-3">
        <div className="card bg-body">
          <div className="card-body py-4">
            <h6 className="card-subtitle mb-2 text-danger">
              Do you want to be on MeetMosaic ?
            </h6>
            <h1 className="card-title display-4">
              Publish your event on our app
            </h1>
            <p className="card-text text-muted">
              Give visibility to your event and increase your audience
            </p>
            <Link className="btn btn-warning" to="/post-events">
              Post your Event
            </Link>
          </div>
        </div>
        <hr />
        <hr />
        <hr />
        <FetchEventsData />
      </main>
      <Footer />
    </>
  );
}
