// export const WEB_API_URL = 'http://localhost:5000/api';

const baseUrl =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://oyedost.herokuapp.com';

export const WEB_API_URL = `${baseUrl}/api`;
