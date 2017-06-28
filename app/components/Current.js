import React from 'react'
// import axios from 'axios'
import api from '../utils/api'

class Current extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currency: '',
			date: ''
		}
	}
	componentDidMount() {
		api.fetchCurrentRates()
			.then((response) => {
				this.setState({ currency: response.data, date: response.data.date })
			})
		// api.fetchCurrentRates()
		// 	.then(function(response) {
		// 		this.setState(function() {
		// 			return {
		// 				currency: response.data,
		// 				date: response.data.date
		// 			}
		// 		})
		// 	}.bind(this));
		// axios.get('http://api.fixer.io/latest?base=USD')
		// 	.then(function (response) {
		// 		console.log(response.data);
		// 		this.setState(function() {
		// 			return {
		// 				currency: response.data,
		// 				date: response.data.date
		// 			}
		// 		})
		// 	}.bind(this));
	}

	render() {
		return (
			<div>
				<h2>{this.state.date}</h2>
				{JSON.stringify(this.state.currency, null, 2)}
			</div>
		)
	}
}

export default Current;