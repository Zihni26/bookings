const fetchAllBookings = require("~root/actions/Customers/fetchAllBooking");
const handleAPIError = require("~root/utils/handleAPIError");
const getAllBooking = async (req, res) => {
    try {
        const { booking } = await fetchAllBookings();
        res.status(201).send({
            booking
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};
module.exports = getAllBooking;