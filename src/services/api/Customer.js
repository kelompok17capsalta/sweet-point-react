import API_ENDPOINT from "../../global/API_ENDPOINT";

// Error
import APIError from "../../errors/APIError";

// utils
import Token from "../localStorage/Token";

const Customer = {
  async getCustomer() {
    const token = Token.getCustomerToken();

    const response = await fetch(API_ENDPOINT.CUSTOMER.INFO, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJSON = await response.json();

    if (response.status !== 200) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
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
      throw new APIError(responseJSON.message || responseJSON.error);
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
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },
};

export default Customer;
