import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
	render() {
		return (
			<div>
			<h1 className='header'>Forex Tracker</h1>
			<ul className='nav'>
	      <li>
	        <NavLink exact activeClassName='active' to='/'>Current</NavLink>
	      </li>
	      <li>
	        <NavLink activeClassName='active' to='/history'>History</NavLink>
	      </li>
    	</ul>
    	</div>
		)
	}
}

export default Nav