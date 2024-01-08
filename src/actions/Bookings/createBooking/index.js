const insertBooking = require("./queries/insertBooking");

const createBooking = async ({ artistName, artistGenre }) => {
  const bookingId = await insertBooking({ bookingName});

  return { bookingId };
};

module.exports = createBooking;