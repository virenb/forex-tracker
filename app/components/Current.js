import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import CurrencyTable from './CurrencyTable';
import api from '../utils/api';

const SelectCurrency = (props) => {
  const currencies = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR',
    'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];
  return (
    <div>
      <ul className="currencies">
        <div className="row">
          {currencies.map(currency => (
            <Button
              size="sm"
              style={currency === props.selectedCurrency ? { fontWeight: 'bold' } : null}
              onClick={props.onSelect.bind(null, currency)}
              key={currency}
              className="btnSpace"
            >
              {currency}
            </Button>
          ))
        }
        </div>
      </ul>
    </div>
  );
};

SelectCurrency.propTypes = {
  selectedCurrency: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCurrency: '',
      date: '',
      rates: '',
      base: '',
    };
    this.updateCurrency = this.updateCurrency.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateCurrency(currency) {
    this.setState({ selectedCurrency: currency });
  }

  handleSubmit(event) {
    event.preventDefault();
    api.fetchCurrentRates(this.state.selectedCurrency)
      .then((response) => {
        this.setState({ rates: response.data.rates, base: '1 Euro' });
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    return (
      <div>
        <div className="current-results">
          <h2>{this.state.date}</h2>
          <p className="euro">{this.state.base}</p>
          <p className="compare-currency">{Object.values(this.state.rates)} {Object.keys(this.state.rates)}</p>
          <SelectCurrency
            selectedCurrency={this.state.selectedCurrency}
            onSelect={this.updateCurrency}
          />
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit" className="btn btn-secondary" />
          </form>
          <CurrencyTable />
        </div>
      </div>
    );
  }
}

export default Current;
