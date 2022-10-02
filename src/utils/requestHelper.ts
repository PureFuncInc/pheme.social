import axios from 'axios';

export default ({
  baseURL = process.env.VUE_APP_API_HOST,
  method = 'GET',
  endpoint = '',
  params = {},
  data = {},
  uri = '',
  headers = {},
}) => axios({
  headers,
  ...(uri ? { url: uri } : { baseURL, url: endpoint }),
  ...(method.toUpperCase() === 'GET' ? { params } : { method, params, data }),
});
