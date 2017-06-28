import axios from 'axios'

module.exports = {
	fetchCurrentRates: () => {
	return axios.get('http://api.fixer.io/latest?base=USD')
		.then((response) => response)
	}
}




// function() {
// 		return axios.get('http://api.fixer.io/latest?base=USD')
// 			.then(function (response) {
// 				return response;
// 	})
// 		}