import { toast, ToastContainer } from 'react-toastify'

export const STORE_OPENING_TIME = 9
export const STORE_CLOSING_TIME = 23

export const INTERVAL = 30
export const TOKEN = '@token'

export const SOMETHING_WENT_WRONG = 'An error occurred. Please try again.'

export const TOAST_ERROR = 'TOAST_ERROR'
export const TOAST_SUCCESS = 'TOAST_SUCCESS'

export const showToast = async (
  message = SOMETHING_WENT_WRONG,
  TYPE = TOAST_ERROR
) => {
  if (TYPE === TOAST_ERROR) {
    return toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
    })
  }
  if (TYPE === TOAST_SUCCESS) {
    return toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
    })
  }
}
