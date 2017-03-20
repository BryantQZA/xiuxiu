import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/app.scss'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Index from './components/index.js'
import Shouye from './components/shouye.js'
import Fenlei from './components/fenlei.js'
import Shopcar from './components/shopcar.js'
import Myxiu from './components/myxiu.js'
import Details from './components/details.jsx'
import TabBarActions from './flux/actions/TabBarActions'
import TabBarStore from './flux/stores/TabBarStore'

let handleEnter = type => {
  TabBarActions.setItem(type)
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={Shouye}></IndexRoute>
            <Route path="shouye" onEnter={handleEnter.bind(this, 'shouye')} component={Shouye}></Route>
            <Route path="fenlei" onEnter={handleEnter.bind(this, 'fenlei')} component={Fenlei}></Route>
            <Route path="shopcar" onEnter={handleEnter.bind(this, 'shopcar')} component={Shopcar}></Route>
            <Route path="myxiu" onEnter={handleEnter.bind(this, 'myxiu')} component={Myxiu}></Route>
        </Route>
        <Route path="/details/:goodsID" component={Details}></Route>
    </Router>    
),document.getElementById('app'))