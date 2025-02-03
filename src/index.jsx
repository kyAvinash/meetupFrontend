import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import PostEventsPage from "./pages/PostEventsPage";
import SearchDetails from "./pages/SearchDetails";
import EventDetails from "./pages/EventDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/post-events",
    element: <PostEventsPage />,
  },
  {
    path: "/search-details/:searchQuery",
    element: <SearchDetails />,
  },
  {
    path: "/event-details/:eventId",
    element: <EventDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
