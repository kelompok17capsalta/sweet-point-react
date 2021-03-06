// Configuration
import CONFIG from '../../global/CONFIG';
import API_ENDPOINT from '../../global/API_ENDPOINT';

// Error
import APIError from '../../errors/APIError';

// Services
import Token from '../localStorage/Token';

const Customer = {
  async getCustomer() {
    const token = Token.getCustomerToken();

    const response = await fetch(API_ENDPOINT.AUTH.INFO, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },

  async register({
    username, name, password, email, phone, address,
  }) {
    const response = await fetch(API_ENDPOINT.AUTH.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, name, password, email, phone, address,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },

  async signIn({ username, password }) {
    if (username === CONFIG.ADMIN_USERNAME) {
      throw new APIError(CONFIG.CREDENTIAL_ERROR_MESSAGE);
    }

    const response = await fetch(API_ENDPOINT.AUTH.SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      const responseMessage = responseJSON.message || responseJSON.error;

      if (responseMessage === CONFIG.API_NOT_FOUND_MESSAGE) {
        throw new APIError(CONFIG.CREDENTIAL_ERROR_MESSAGE);
      }

      throw new APIError(responseMessage);
    }

    return responseJSON.data;
  },

  async updateCustomer({
    id, username, name, email, phone, address, password,
  }) {
    const token = Token.getCustomerToken();

    const response = await fetch(`${API_ENDPOINT.USER}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username, name, email, phone, address, password,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },
};

export default Customer;
