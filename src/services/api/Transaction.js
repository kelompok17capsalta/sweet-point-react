// Configuration
import API_ENDPOINT from "../../global/API_ENDPOINT";

// Error
import APIError from "../../errors/APIError";

// Services
import Token from "../localStorage/Token";

// Utils
import MoneyFormatter from "../../utils/MoneyFormatter";

const Transaction = {
  async createTransaction({ 
    points,
    username,
    category,
    credentials,
    provider,
    product_id,
    denom,
  }) {
    const token = Token.getAdminToken() || Token.getCustomerToken();

    const response = await fetch(API_ENDPOINT.TRANSACTION.NEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        descriptions:  `Penukaran ${category} ${MoneyFormatter.format(denom)}`,
        points,
        user: { username },
        category,
        credentials,
        provider,
        product: product_id,
        denom,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },

  async getAllTransactions() {
    const token = Token.getAdminToken() || Token.getCustomerToken;

    const response = await fetch(`${API_ENDPOINT.TRANSACTION.BASE}/`, {
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

  async getUserTransactions() {
    const token = Token.getCustomerToken();

    const response = await fetch(`${API_ENDPOINT.TRANSACTION.USER}/`, {
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

  async updateTransactionStatus(id, status) {
    const token = Token.getAdminToken();

    const response = await fetch(`${API_ENDPOINT.TRANSACTION.BASE}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ 
        status
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },

  async deleteTransaction(id) {
    const token = Token.getAdminToken();

    const response = await fetch(`${API_ENDPOINT.TRANSACTION.BASE}/${id}`, {
      method: 'DELETE',
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
};

export default Transaction;
