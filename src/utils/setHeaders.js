const setHeaders = () => {
    let headers = {};
    const { token } = localStorage;
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: token
      };
    } else {
      headers = {
        'Content-Type': 'application/json'
      };
    }
    return headers;
  };
  export default setHeaders;
  