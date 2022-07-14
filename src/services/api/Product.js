// Configuration
import API_ENDPOINT from '../../global/API_ENDPOINT';

// Error
import APIError from '../../errors/APIError';

// Services
import Token from '../localStorage/Token';
import Storage from '../firebase/Storage';

const Product = {
  async createProduct({
    product_name,
    denom,
    category,
    descriptions,
    points,
    stock,
    image,
  }) {
    const token = Token.getAdminToken();

    const imageURL = await Storage.uploadProductImage(image);

    const response = await fetch(`${API_ENDPOINT.PRODUCT}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_name,
        denom,
        category,
        descriptions,
        points,
        stock,
        image: imageURL,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    return responseJSON.data;
  },

  async getAllProducts() {
    const token = Token.getAdminToken() || Token.getCustomerToken();

    const response = await fetch(`${API_ENDPOINT.PRODUCT}/`, {
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

  async getProductById(id) {
    const token = Token.getAdminToken() || Token.getCustomerToken();

    const response = await fetch(`${API_ENDPOINT.PRODUCT}/${id}`, {
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

  async updateProduct({
    id,
    product_name,
    denom,
    category,
    descriptions,
    points,
    image,
    stock,
  }, oldImage) {
    const token = Token.getAdminToken();

    let imageURL = image;
    if (!image.startsWith('https')) {
      imageURL = await Storage.uploadProductImage(image);
    }

    const response = await fetch(`${API_ENDPOINT.PRODUCT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        product_name,
        denom,
        category,
        descriptions,
        points,
        image: imageURL,
        stock,
      }),
    });
    const responseJSON = await response.json();

    if (response.status < 200 || response.status > 299) {
      throw new APIError(responseJSON.message || responseJSON.error);
    }

    if (oldImage?.startsWith('https://firebasestorage.googleapis.com/')) {
      await Storage.deleteProductImage(oldImage);
    }

    return responseJSON.data;
  },

  async deleteProduct(id, image) {
    const token = Token.getAdminToken();

    const response = await fetch(`${API_ENDPOINT.PRODUCT}/${id}`, {
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

    if (image.startsWith('https://firebasestorage.googleapis.com/')) {
      await Storage.deleteProductImage(image);
    }

    return responseJSON.data;
  },
};

export default Product;
