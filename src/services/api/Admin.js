import API_ENDPOINT from "../../global/API_ENDPOINT";

// Error
import APIError from "../../errors/APIError";

// utils
import Token from "../localStorage/Token";

const Admin = {
  async getAdmin() {
    const token = Token.getAdminToken();

    const response = await fetch(API_ENDPOINT.ADMIN.INFO, {
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

  async signIn({ username, password }) {
    if (username !== 'admin') {
      throw new APIError('Credential is not valid.');
    }

    const response = await fetch(API_ENDPOINT.ADMIN.SIGN_IN, {
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

export default Admin;
