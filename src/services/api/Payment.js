// Configuration
import API_ENDPOINT from '../../global/API_ENDPOINT';

// Error
import APIError from '../../errors/APIError';

// Services
import Token from '../localStorage/Token';

const Payment = {
  async payTransaction({
    name,
    provider,
    credentials,
    price,
  }) {
    const token = Token.getAdminToken();

    const response = await fetch(`${API_ENDPOINT.PAYMENT}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        provider,
        credentials,
        price,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },
};

export default Payment;
