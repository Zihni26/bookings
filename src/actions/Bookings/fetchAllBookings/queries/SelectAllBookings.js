const selectAllBookings = require("./queries/selectAllBookings");

const fetchAllBookings= async () => {
  const albums = await selectAllBookings();

  return { Bookings };
};

module.exports = fetchAllBookings;