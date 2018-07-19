import axios from 'axios';

module.exports = {
  fetchCurrentRates: (currency) => {
    const encodedCurrentURI = window.encodeURI(`http://data.fixer.io/api/latest?access_key=94d25fd1d7cb61518295c0d62a5a021f&base=EUR&symbols=${currency}`);
    return axios.get(encodedCurrentURI)
      .then(response => response);
  },

  fetchHistoryRates: (date, currency) => {
    const encodedHistoryURI = window.encodeURI(`http://data.fixer.io/api/${date}?access_key=94d25fd1d7cb61518295c0d62a5a021f&symbols=${currency}`);
    return axios.get(encodedHistoryURI)
      .then(response => response);
  },
};
