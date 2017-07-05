import React from 'react'
import { Button } from 'reactstrap'
import CurrencyTable from './CurrencyTable'
import PropTypes from 'prop-types'
import api from '../utils/api'

const SelectCurrency = (props) => {
	let currencies = ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR",
"INR", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"];
	return (
		<div>
			<ul className="currencies">
				<div className="row">
				{currencies.map((currency) => {
					return (
						<Button 
						size='sm'
						style={currency === props.selectedCurrency ? {fontWeight: 'bold'} : null}
						onClick={props.onSelect.bind(null, currency)} 
						key={currency}
						className='btnSpace'
						>
						{currency}
						</Button>
					)
				})}
				</div>
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
			rates: '',
			keys: [],
			base: ''
		}
	this.updateCurrency = this.updateCurrency.bind(this);
	}

updateCurrency(currency) {
	this.setState({selectedCurrency: currency})

	api.fetchCurrentRates(currency)
	.then((response) => {
		this.setState({ date: response.data.date, rates: response.data.rates, base: '1 Euro' })
		console.log(this.state.rates)
	})
}

componentDidMount() {
	updateCurrency(this.state.selectedCurrency)
}

	render() {
		return (
			<div>
				<div className="current-results">
					<h2>{this.state.date}</h2>
					<p className='euro'>{this.state.base}</p>
					<p className='compare-currency'>{Object.values(this.state.rates)} {Object.keys(this.state.rates)}</p>
				<SelectCurrency
					selectedCurrency={this.state.selectedCurrency}
					onSelect={this.updateCurrency} />			
				<CurrencyTable />	
				</div>				
			</div>
		)
	}
}

export default Current;