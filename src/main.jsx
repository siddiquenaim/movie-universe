import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import ShowDetails from "./components/ShowDetails/ShowDetails";
import MainLayout from "./layout/MainLayout/MainLayout";
import ShowTicket from "./components/ShowTicket/ShowTicket";
import BookedMovies from "./components/BookedMovies/BookedMovies";
import bookedMoviesLoader from "./components/BookedMovies/getBookedMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shows/:id",
        element: <ShowDetails></ShowDetails>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/show-ticket/:id",
        element: <ShowTicket></ShowTicket>,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/booked-movies",
        element: <BookedMovies></BookedMovies>,
        loader: bookedMoviesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
