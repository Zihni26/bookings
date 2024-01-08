const selectAllCustomers = require("./queries/selectAllCustomers");

const fetchAllCustomers = async () => {
  const albums = await selectAllCustomers();

  return { Customers };
};

module.exports = fetchAllCustomers;