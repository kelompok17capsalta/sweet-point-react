import CONFIG from "./CONFIG";

const API_ENDPOINT = {
  CUSTOMER: {
    SIGN_UP: `${CONFIG.API_BASE_URL}/v1/auth/register`,
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
    USER: `${CONFIG.API_BASE_URL}/v1/user`,
  },
  ADMIN: {
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
    CUSTOMERS: `${CONFIG.API_BASE_URL}/v1/user/`,
  },
};

export default API_ENDPOINT;
