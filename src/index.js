import React from 'react';
import { render } from 'react-dom';
import { injectGlobal } from 'styled-components';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

// Reducers
import mainReducer from './redux/reducers';
// Main Components
import Home from './components/Home';
// Utils
import { loadState, saveState } from './util/localStorage';
// Sagas
import rootSaga from './sagas';
// Middlewares
import logger from './middlewares/logger';

const sagaMiddleware = createSagaMiddleware();

const history = createHistory();

let middlewares = [];

middlewares.push(routerMiddleware(history));
middlewares.push(sagaMiddleware);
middlewares.push(logger);

const store = createStore(mainReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveState({
    store: store.getState()
  });
});

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: black;
    }
`;

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/signup" component={Signup} />
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
                <Route component={Error404} /> */}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
