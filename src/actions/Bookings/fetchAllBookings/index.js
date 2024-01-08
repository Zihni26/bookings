const selectAllBookings = require("./queries/selectAllBookings");
const fetchAllBookings= async () => {
    const Customers = await selectAllBookings();
    return { Bookings};
};
module.exports = fetchAllBookings;