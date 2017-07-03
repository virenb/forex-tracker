import axios from 'axios'

module.exports = {
	fetchCurrentRates: (currency) => {
	return axios.get('http://api.fixer.io/latest?symbols=' + currency +'' )
		.then((response) => response)
	},

	fetchHistoryRates: (date, currency) => {
		var encodedURI = window.encodeURI('http://api.fixer.io/' + date + '?symbols=' + currency +'')
		return axios.get(encodedURI)
			.then((response) => response)
	}
}


// function() {
// 		return axios.get('http://api.fixer.io/latest?base=USD')
// 			.then(function (response) {
// 				return response;
// 	})
// 		}