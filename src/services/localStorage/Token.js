import CONFIG from "../../global/CONFIG"

const Token = {
  createUserToken(token) {
    return localStorage.setItem(CONFIG.USER_TOKEN_KEY, token)
  },

  createAdminToken(token) {
    return localStorage.setItem(CONFIG.ADMIN_TOKEN_KEY, token)
  },

  getUserToken() {
    return localStorage.getItem(CONFIG.USER_TOKEN_KEY);
  },

  getAdminToken() {
    return localStorage.getItem(CONFIG.ADMIN_TOKEN_KEY);
  },

  removeUserToken() {
    return localStorage.removeItem(CONFIG.USER_TOKEN_KEY);
  },

  removeAdminToken() {
    return localStorage.removeItem(CONFIG.ADMIN_TOKEN_KEY);
  },
};

export default Token;
