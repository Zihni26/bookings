const selectBookingById = require("./queries/selectBookingsById");

const fetchBookingById = async ({ bookingId }) => {
  const booking = await selectBookingsById({
    bookingId
  });
  return { booking };
};
module.exports = fetchBookingById;