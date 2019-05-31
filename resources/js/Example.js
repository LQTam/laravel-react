import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { createStore, applyMiddleware , compose} from 'redux'
import reducer from './reducer/reducer';
import { Provider } from 'react-redux';
import routes from './routes';
import thunk from 'redux-thunk';


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
)

const showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            );
        });
    }
    return <Switch>{result}</Switch>;
}

export default class Example extends Component {
    render() {
        return (
            <Router>
                <>
                    <Nav />
                    <div className ='container'>
                        <div className='row mt-100'>
                            {showContentMenus(routes)}
                        </div>
                    </div>
                </>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(
        <Provider store = {store}>
            <Example />
        </Provider>,
        document.getElementById('root'));
}
