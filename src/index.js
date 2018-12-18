import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {counter} from "./redux/index.redux";
import {BrowserRouter, Route, Link, Redirect, Switch} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './dashboard'
import AuthRoute from './component/authRoute/authRoute'
import reducers from './reducer'
import Login from "./container/login/login";
import Register from "./container/register/register";
import './index.css'

const store = createStore(reducers, applyMiddleware(thunk))
// const render =()=>{
//     ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>, document.getElementById('root'));
// }
// store.subscribe(render)


class Test extends Component {
    render() {
        return (
            <h2>测试组件{this.props.match.params.location}</h2>
        )
    }
}

const Boss = ()=>{
    return <h2>Boss页面</h2>
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            {/*<Route path='/:location' component={Test}></Route>*/}
            {/*<Switch>*/}
                {/*/!*只渲染第一个路由*!/*/}
                {/*<Route path='/login' exact component={Auth}></Route>*/}
                {/*<Route path='/dashboard' component={Dashboard}></Route>*/}
                {/*<Redirect to='/dashboard'></Redirect>*/}
            {/*</Switch>*/}
            <div>
                <AuthRoute></AuthRoute>
                <Route path='/boss' component={Boss}></Route>
                <Route path='/login' component={Login}>{Login}</Route>
                <Route path='/register' component={Register}>{Register}</Route>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
// render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
