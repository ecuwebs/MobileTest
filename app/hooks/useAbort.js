import abortable from '../lib/abortable';

export const useAbort = () => {
  const ab = new AbortController();
  const signal = { abortable, signal: ab.signal };
  const abort = () => ab.abort();
  return [signal, abort];
};
