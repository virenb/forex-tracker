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
						className="btnSpace"
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

class History extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedCurrency: '',
			date: '',
			rates: '',
			base: ''
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
	this.setState({ selectedCurrency: currency })
}

handleDateSubmit(event, date, currency) {
		event.preventDefault();
		api.fetchHistoryRates(this.state.date, this.state.selectedCurrency)
			.then((response) => {
				this.setState({ rates: response.data.rates, base: '1 Euro' })
				console.log(this.state)
			})
			.catch((err) => { console.log(err) })		
	}

	render() {
		return (
			<div>
				<div className="current-results">
				<h2>{this.state.date}</h2>
					<p className='euro'>{this.state.base}</p>
					<p className='compare-currency'>{Object.values(this.state.rates)} {Object.keys(this.state.rates)}</p>					
					<form onSubmit={this.handleDateSubmit}>
						<label>
							Enter Date:<span> </span>
						<input type="text" placeholder='yyyy-mm-dd' name='date' value={this.state.date} onChange={this.setDate} required />
						</label>
						<span> </span>
						<input type="submit" value='Submit' className='btn btn-secondary btn-sm' />
						<SelectCurrency
						selectedCurrency={this.state.selectedCurrency}
						onSelect={this.updateCurrency} />				
					</form>
						<div className="instructions">
							<h5>Instructions</h5>
						<li>1. Enter a date in yyyy-mm-dd format. Anything earlier than 1999-01-04 will not work.</li>
						<li>2. Select a currency.</li>
						<li>3. Hit Submit.</li>
					</div>
					<CurrencyTable />						
				</div>
			</div>
		)
	}
}

export default History;