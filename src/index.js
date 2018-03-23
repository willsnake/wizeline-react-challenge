import React from "react";
import { render } from 'react-dom';
import { injectGlobal } from "styled-components";
import App from "./App";

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

// import mainReducer from './redux/reducers';
import { routerMiddleware } from 'react-router-redux';
import {  Router,  Route, Switch, Redirect } from 'react-router-dom';

// import {minFraud, Login, ForgotPassword, RecoverPassword, Signup, Partners, Error404, PartnersDetails, Invite, RevenueCalculator, Users } from './views/';
// import AdRecovery from './views/reports/AdRecovery';
// import BlockingAnalytics from './views/reports/BlockingAnalytics';
// import Pageview from './views/reports/Pageview';
// import MissedOpportunities from './views/reports/MissedOpportunities';
// import { loadState, saveState } from './util/localStorage';

// import { getCookie } from './util/common';

const history = createHistory();

let middlewares = [];

middlewares.push(routerMiddleware(history));

// Load State
// const persistedState = loadState();

const store = createStore(mainReducer, persistedState, compose(applyMiddleware(...middlewares)));

const options = { refreshOnCheckAuth: true, redirectPath: '/login', driver: 'COOKIES' };
sessionService.refreshFromLocalStorage();
sessionService.initSessionService(store, options);

store.subscribe(throttle( () => {
    saveState({
        queryString: store.getState().queryString
    });
}, 1000));

const renderComponent = (props, Component) => {
    let cookie = getCookie('USER-SESSION');
    let loginRedirect = <Redirect to={`/login${props.location.search}`} />;

    if (cookie === '' || cookie === undefined || cookie === null) {
        return  loginRedirect;
    }

    let parsedCookie = JSON.parse(cookie);

    if (!parsedCookie) {
        return loginRedirect;

    }
    if (!parsedCookie.user) {
        return loginRedirect;
    }

    const queryState = loadState();

    if (window.location.search && window.location.search.length > 0) {
        store.dispatch(parseUrlQuery());
    }

    return <Component {...props} />
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => renderComponent(props, Component)} />
    );
};

render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/invite" component={Invite} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route exact path="/reset-password" component={RecoverPassword} />
                <Route exact path="/" render={() => <Redirect to="/reports/blocking-analytics" />}/>
                <Route exact path="/reports" render={() => <Redirect to="/reports/blocking-analytics" />}/>
                <PrivateRoute exact path="/reports/blocking-analytics" component={BlockingAnalytics} />
                <PrivateRoute exact path="/reports/missed-opportunities" component={MissedOpportunities} />
                <PrivateRoute exact path="/reports/pageviews" component={Pageview} />
                <PrivateRoute exact path="/reports/ad-recovery" component={AdRecovery} />
                <PrivateRoute exact path="/partners" component={Partners} />
                <PrivateRoute exact path="/partners/:partnerId" component={PartnersDetails} />
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/revenue-calculator" component={RevenueCalculator} />
                <PrivateRoute exact path="/ip-risk-evaluator" component={minFraud} />
                <Route component={Error404} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);




injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: black;
    }
`;

ReactDOM.render(<App />, document.getElementById("root"));
