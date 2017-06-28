import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
	render() {
		return (
			<ul className='nav'>
	      <li>
	        <NavLink exact activeClassName='active' to='/'>Current</NavLink>
	      </li>
	      <li>
	        <NavLink activeClassName='active' to='/history'>History</NavLink>
	      </li>
    	</ul>
		)
	}
}

export default Nav