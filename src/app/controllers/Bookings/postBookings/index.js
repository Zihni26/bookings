const handleAPIError = require("~root/utils/handleAPIError");
const createArtist = require("~root/actions/Bookings/createBooking");

const postArtist = async (req, res) => {
  const { bookingName,  } = req.body;

  try {
    const { bookingId } = await createArtist({ bookingName});

    res.status(201).send({
      bookingId
    });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postBooking;