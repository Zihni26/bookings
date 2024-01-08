const updateBookingById = require("./queries/updateBookingById");

const modifyBookingById = async ({ bookingId,bookingName }) => {
  const booking = await updateArtistById({
    bookingId,
    bookingName,
    
  });

  return { booking };
};

module.exports = modifyBookingById;