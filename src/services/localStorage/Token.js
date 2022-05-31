import CONFIG from "../../global/CONFIG"

const Token = {
  saveCustomerToken(token) {
    return localStorage.setItem(CONFIG.CUSTOMER_TOKEN_KEY, token)
  },

  saveAdminToken(token) {
    return localStorage.setItem(CONFIG.ADMIN_TOKEN_KEY, token)
  },

  getCustomerToken() {
    return localStorage.getItem(CONFIG.CUSTOMER_TOKEN_KEY);
  },

  getAdminToken() {
    return localStorage.getItem(CONFIG.ADMIN_TOKEN_KEY);
  },

  removeCustomerToken() {
    return localStorage.removeItem(CONFIG.CUSTOMER_TOKEN_KEY);
  },

  removeAdminToken() {
    return localStorage.removeItem(CONFIG.ADMIN_TOKEN_KEY);
  },
};

export default Token;
