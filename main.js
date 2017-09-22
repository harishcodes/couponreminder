import React from 'react'
import ReactDOM from 'react-dom'
import CouponReminder from './CouponReminder.js'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import storefn from './store'
const app = document.getElementById('app')
//console.log('sdddss')
const store=storefn()

//LATER USE
//<Route path="/AlarmRank" component={AlarmCodeRank} />

const routes = <Route>
        <Route path="/" component={CouponReminder} /> 
      </Route>
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            {routes}
        </Router>
    </Provider>,app)
