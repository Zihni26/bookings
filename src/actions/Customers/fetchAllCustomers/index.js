const selectAllCustomers = require("./queries/selectAllCustomers");
const fetchAllCustomers = async () => {
    const Customers = await selectAllCustomers();
    return { Customers };
};
module.exports = fetchAllCustomers;