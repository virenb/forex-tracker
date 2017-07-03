import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import api from '../utils/api'
import queryString from 'query-string'

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

class History extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedCurrency: '',
			date: '',
			rates: []
		}
	this.setDate = this.setDate.bind(this);
	this.updateCurrency = this.updateCurrency.bind(this);
	this.handleDateSubmit = this.handleDateSubmit.bind(this);
	}


setDate(event) {
	event.preventDefault();
	this.setState({ date: event.target.value })
}

updateCurrency(currency) {
	this.setState({selectedCurrency: currency})
}

handleDateSubmit(event, date, currency) {
		event.preventDefault();
		api.fetchHistoryRates(this.state.date, this.state.selectedCurrency)
			.then((response) => {
				this.setState({ rates: response.data.rates })
				console.log(this.state)
			})
			.catch((err) => {console.log(err)})		
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleDateSubmit}>
					<label>
						Enter Date:<span> </span>
					<input type="text" placeholder='yyyy-mm-dd' name='date' value={this.state.date} onChange={this.setDate} />
					</label>
					<input type="submit" value='Submit' />
					<SelectCurrency
					selectedCurrency={this.state.selectedCurrency}
					onSelect={this.updateCurrency} />				
			</form>
				<h2>{this.state.date}</h2>
					<p>EUR 1</p>
					<p>{Object.keys(this.state.rates)} {Object.values(this.state.rates)}</p>
					<div className="instructions">
						Instructions
						<li>1. Enter a date in yyyy-mm-dd format. Anything earlier than 1999-01-04 will not work.</li>
						<li>2. Select a currency.</li>
						<li>3. Hit Submit.</li>
				</div>
			</div>
		)
	}
}

export default History;