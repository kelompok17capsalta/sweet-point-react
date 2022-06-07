const dummyCustomer = {
  id: +new Date(),
  name: 'Dummy Customer',
};

const Customer = {
  async getCustomer() {
    return dummyCustomer;
  },
};

export default Customer;
