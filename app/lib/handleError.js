export const handleError = (err, callback = null) => {
  if (err.name && err.name === 'AbortError') {
    return;
  }

  callback && callback(err);
};
