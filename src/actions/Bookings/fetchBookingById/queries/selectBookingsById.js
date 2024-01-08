const { submitQuery, camelKeys } = require("~root/lib/database");

const selectBookingsById = ({ bookingId }) => submitQuery`
    SELECT booking_name,FROM bookings WHERE bookings_id = ${booking.Id}
    `;
module.exports = camelKeys(selectBookingById);