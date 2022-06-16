import ClientError from './ClientError';

class APIError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'APIError';
  }
}

export default APIError;
