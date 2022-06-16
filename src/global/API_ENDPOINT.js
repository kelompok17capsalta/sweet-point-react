import CONFIG from "./CONFIG";

const API_ENDPOINT = {
  CUSTOMER: {
    SIGN_UP: `${CONFIG.API_BASE_URL}/auth/register`,
    SIGN_IN: `${CONFIG.API_BASE_URL}/auth/login`,
  }
};

export default API_ENDPOINT;
