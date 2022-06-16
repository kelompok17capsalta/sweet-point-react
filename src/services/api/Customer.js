import API_ENDPOINT from "../../global/API_ENDPOINT";
import APIError from "../../errors/APIError";

const dummyCustomer = {
  id: +new Date(),
  name: 'Dummy Customer',
};

const Customer = {
  async getCustomer() {
    return dummyCustomer;
  },

  async register(customerPayload) {
    const response = await fetch(API_ENDPOINT.CUSTOMER.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customerPayload),
    });
    const responseJSON = await response.json();

    if (response.status !== 200) {
      throw new APIError(responseJSON.message);
    }

    return responseJSON.data;
  },

  async signIn({ username, password }) {
    const response = await fetch(API_ENDPOINT.CUSTOMER.SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const responseJSON = await response.json();

    if (response.status !== 200) {
      throw new APIError(responseJSON.message);
    }

    return responseJSON.data;
  },
};

export default Customer;
