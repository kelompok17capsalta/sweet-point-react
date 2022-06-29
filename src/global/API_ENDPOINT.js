import CONFIG from "./CONFIG";

const API_ENDPOINT = {
  AUTH: {
    SIGN_UP: `${CONFIG.API_BASE_URL}/v1/auth/register`,
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
  },
  USER: `${CONFIG.API_BASE_URL}/v1/user`,
  PRODUCT: `${CONFIG.API_BASE_URL}/v1/product`,
};

export default API_ENDPOINT;
