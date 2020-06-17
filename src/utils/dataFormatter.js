export const parseQueryString = (queryString) => {
  const queryList = {};
  if (queryString) {
    const query = queryString.split('?')[1];
    const queryItem = query.split('&');
    queryItem.forEach((item) => {
      const queryArray = item.split('=');
      queryList[queryArray[0]] = queryArray[1];
    });
  }
  return queryList;
};
