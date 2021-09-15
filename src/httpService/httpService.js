import axios from 'axios';
import { WEB_API_URL } from '../constants/config';

axios.defaults.baseURL = WEB_API_URL;

if (localStorage.getItem('token'))
  axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  (request) => {
    request.headers['authorization'] = `Bearer ${localStorage.getItem(
      'token'
    )}`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 403) {
      // localStorage.clear();
      window.location.href = '/';
    } else if (error.response.status === 500) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

const httpService = {
  post: axios.post,
  get: axios.get,
  put: axios.put,
  patch: axios.patch,
  all: axios.all,
  delete: axios.delete
};

export default httpService;
