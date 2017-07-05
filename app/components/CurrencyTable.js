import React from 'react'
import { Table } from 'reactstrap'

const CurrencyTable = () => {
	return (
		<div className="">
			<Table striped className='table table-nonfluid'>
			<thead>
				<tr>
					<th>Abbreviation</th>
					<th>Currency</th>
				</tr>	
			</thead>
			<tbody>
				<tr>
					<th scope='row'>AUD</th>
					<td>Australia Dollar</td>
				</tr>
				<tr>
					<th scope='row'>BGN</th>
					<td>Bulgaria Lev</td>
				</tr>				
				<tr>
					<th scope='row'>BRL</th>
					<td>Brazil Real</td>
				</tr>
				<tr>
					<th scope='row'>CAD</th>
					<td>Canada Dollar</td>
				</tr>
				<tr>
					<th scope='row'>CHF</th>
					<td>Switzerland Franc</td>
				</tr>
				<tr>
					<th scope='row'>CNY</th>
					<td>China Yuan Renminbi</td>
				</tr>
				<tr>
					<th scope='row'>CZK</th>
					<td>Czech Republic Koruna</td>
				</tr>
				<tr>
					<th scope='row'>DKK</th>
					<td>Denmark Krone</td>
				</tr>		
				<tr>
					<th scope='row'>GBP</th>
					<td>United Kingdom Pound</td>
				</tr>
				<tr>
					<th scope='row'>HKD</th>
					<td>Hong Kong Dollar</td>
				</tr>
				<tr>
					<th scope='row'>HRK</th>
					<td>Croatia Kuna</td>
				</tr>
				<tr>
					<th scope='row'>HUF</th>
					<td>Hungary Forint</td>
				</tr>
				<tr>
					<th scope='row'>IDR</th>
					<td>Indonesia Rupiah</td>
				</tr>
				<tr>
					<th scope='row'>INR</th>
					<td>India Rupee</td>
				</tr>				
				<tr>
					<th scope='row'>JPY</th>
					<td>Japan Yen</td>
				</tr>
				<tr>
					<th scope='row'>KRW</th>
					<td>South Korea Won</td>
				</tr>		
				<tr>
					<th scope='row'>MXN</th>
					<td>Mexico Peso</td>
				</tr>
				<tr>
					<th scope='row'>MYR</th>
					<td>Malaysia Ringgit</td>
				</tr>
				<tr>
					<th scope='row'>NOK</th>
					<td>Norway Krone</td>
				</tr>
				<tr>
					<th scope='row'>NZD</th>
					<td>New Zealand Dollar</td>
				</tr>
				<tr>
					<th scope='row'>PHP</th>
					<td>Philippines Peso</td>
				</tr>
				<tr>
					<th scope='row'>PLN</th>
					<td>Poland Zloty</td>
				</tr>									
				<tr>
					<th scope='row'>RON</th>
					<td>Romania New Leu</td>
				</tr>
				<tr>
					<th scope='row'>RUB</th>
					<td>Russia Ruble</td>
				</tr>		
				<tr>
					<th scope='row'>SEK</th>
					<td>Sweden Krona</td>
				</tr>
				<tr>
					<th scope='row'>SGD</th>
					<td>Singapore Dollar</td>
				</tr>
				<tr>
					<th scope='row'>THB</th>
					<td>Thailand Baht</td>
				</tr>
				<tr>
					<th scope='row'>TRY</th>
					<td>Turkey Lira</td>
				</tr>
				<tr>
					<th scope='row'>USD</th>
					<td>United States Dollar</td>
				</tr>
				<tr>
					<th scope='row'>ZAR</th>
					<td>South Africa Rand</td>
				</tr>																							
			</tbody>
			</Table>	
		</div>
	)

}

export default CurrencyTable