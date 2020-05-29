const onRequest = (config) => {
  const customConfig = config;
  const token = JSON.parse(localStorage.getItem('tempAuthToken'));

  if (token && !customConfig.headers.Authorization) {
    customConfig.headers.Authorization = `token ${token}`;
  }
  return config;
};

export default onRequest;
