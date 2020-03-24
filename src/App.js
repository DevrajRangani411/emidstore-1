import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import asyncComponent from './utils/asyncComponent.jsx';
import * as serviceWorker from "./serviceWorker";
import axios from './services';
import configureStore, { history } from "./store";
export const store = configureStore();


const demoHTML = () => (<div>HELLO</div>);
const App = () => {
    return (
        <>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" component={demoHTML} />
                        </Switch>
                    </BrowserRouter>
                </ConnectedRouter>
            </Provider>
        </>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
serviceWorker.register();
export default App;
