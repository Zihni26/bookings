const fetchBookingsById = require("~root/actions/artists/fetchBookingById");
const handleAPIError = require("~root/utils/handleAPIError");

const getBookingById = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const { artist } = await fetchArtistById({
     bookingId
    });
    res.status(201).send({
      booking
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};
module.exports = getBookingById;