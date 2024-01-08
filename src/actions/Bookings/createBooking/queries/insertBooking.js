const { submitQuery, getInsertId } = require("~root/lib/database");

const insertBooking = async ({ bookingName}) => submitQuery`
    INSERT INTO artists (booking_name, booking_genre)
    VALUES (${bookingName});
`;

module.exports = getInsertId(insertBooking);