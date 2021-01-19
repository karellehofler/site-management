import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthProvider';
import App from '../App';

export default function Routes() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <Route exact path ="/" component={App} />
                    <Route path="/login" />
                    <Route path="/signup" />
                    <Route path="/profile" />
                </Switch>
            </AuthProvider>
        </Router>
    )
}