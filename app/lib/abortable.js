const createAbortError = () => {
  const abortError = new Error('Aborted');
  abortError.name = 'AbortError';
  return abortError;
};

const abortable = (promise, opts) => {
  const signal = opts.signal;
  if (signal.aborted) {
    return Promise.reject(createAbortError());
  }
  return Promise.race([
    promise,
    new Promise(function (resolve, reject) {
      signal.addEventListener('abort', function onAbort() {
        reject(createAbortError());
        signal.removeEventListener('abort', onAbort);
      });
    }),
  ]);
};

export default abortable;
