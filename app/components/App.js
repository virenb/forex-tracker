import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import Current from './Current'
import History from './History'

class App extends React.Component {
	render() {
		return (
			<Router>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Current} />
            <Route path='/history' component={History} />
            <Route render={ () => <p>Not Found</p> }/>
          </Switch>
        </div>
      </Router>
		)
	}
}

export default App;