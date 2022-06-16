import swal from 'sweetalert2';

// Configuration
import CONFIG from '../global/CONFIG';

// Errors
import APIError from '../errors/APIError';

const ErrorHandler = {
  handle(error) {
    let message = CONFIG.DEFAULT_ERROR_MESSAGE;
    if (error instanceof APIError) {
      message = error.message;
    }

    return swal.fire(
      CONFIG.DEFAULT_ERROR_TITLE,
      message,
      'error',
    )
  }
};

export default ErrorHandler;
