const modifyBookingsById = require("~root/actions/Bookings/modifyBookingById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchBookingsById = async (req, res) => {
    const { BookingId } = req.params;
    const { bookingName } = req.body;

    try {
        const { bookings } = await modifyBookingById({
            abookingsId,
            bookingName,
        });

        res.status(201).send({
            booking
        });
    } catch (err) {
        handleAPIError(res, err);
    }
};

module.exports = patchBookingById;