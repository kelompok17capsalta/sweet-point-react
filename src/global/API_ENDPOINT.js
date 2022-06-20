import CONFIG from "./CONFIG";

const API_ENDPOINT = {
  CUSTOMER: {
    SIGN_UP: `${CONFIG.API_BASE_URL}/v1/auth/register`,
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
  },
  ADMIN: {
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
  },
};

export default API_ENDPOINT;
