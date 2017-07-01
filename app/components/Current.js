import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import api from '../utils/api'
//import Rates from './Rates'

const SelectCurrency = (props) => {
	let currencies = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR",
"INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
	return (
		<div>
			<ul className="currencies">
				{currencies.map((currency) => {
					return (
						<Button 
						style={currency === props.selectedCurrency ? {fontWeight: 'bold'} : null}
						onClick={props.onSelect.bind(null, currency)} 
						key={currency}
						>
						{currency}
						</Button>
					)
				})}
			</ul>
		</div>
	)
}

SelectCurrency.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Current extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedCurrency: '',
			date: '',
			rates: [],
			keys: []
		}
	this.updateCurrency = this.updateCurrency.bind(this);
	}

componentDidMount() {
	updateCurrency(this.state.selectedCurrency)
}

updateCurrency(currency) {
	this.setState({selectedCurrency: currency})

	api.fetchCurrentRates(currency)
	.then((response) => {
		this.setState({ date: response.data.date, rates: response.data.rates })
		console.log(this.state.rates)
		// Object.keys(response.data.rates).forEach(function(key) {
		// 	console.log(key + ': ' + response.data.rates[key]);
		//})
	})
}
//Object.keys(nameObj).forEach(function(key) {
//    console.log(key + ': ' + nameObj[key]);
// });

	componentDidMount() {

	}

	render() {
		return (
			<div>
				{this.state.date}
				<p>EUR 1</p>
				<p>{Object.keys(this.state.rates)} {Object.values(this.state.rates)}</p>
				<SelectCurrency
					selectedCurrency={this.state.selectedCurrency}
					onSelect={this.updateCurrency} />
					
			</div>
		)
	}
}

export default Current;