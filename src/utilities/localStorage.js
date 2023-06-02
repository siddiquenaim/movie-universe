const getBookedShows = () => {
  let bookedShows = {};

  const storedShows = localStorage.getItem("booked-shows");
  if (storedShows) {
    bookedShows = JSON.parse(storedShows);
  }
  return bookedShows;
};

const bookShow = (id) => {
  let bookedShows = getBookedShows();
  // add quantity
  const quantity = bookedShows[id];
  if (!quantity) {
    bookedShows[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    bookedShows[id] = newQuantity;
  }
  localStorage.setItem("booked-shows", JSON.stringify(bookedShows));
};

export { getBookedShows, bookShow };
