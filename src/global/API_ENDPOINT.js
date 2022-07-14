import CONFIG from './CONFIG';

const API_ENDPOINT = {
  AUTH: {
    SIGN_UP: `${CONFIG.API_BASE_URL}/v1/auth/register`,
    SIGN_IN: `${CONFIG.API_BASE_URL}/v1/auth/login`,
    INFO: `${CONFIG.API_BASE_URL}/v1/auth/info`,
  },
  USER: `${CONFIG.API_BASE_URL}/v1/user`,
  PRODUCT: `${CONFIG.API_BASE_URL}/v1/product`,
  TRANSACTION: {
    BASE: `${CONFIG.API_BASE_URL}/v1/transaction`,
    USER: `${CONFIG.API_BASE_URL}/v1/transaction/user`,
    NEW: `${CONFIG.API_BASE_URL}/v1/transaction/new`,
  },
  PAYMENT: `${CONFIG.API_BASE_URL}/v1/payment`,
};

export default API_ENDPOINT;
