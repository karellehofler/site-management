import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Settings, Login, SignUp, Profile, Home, Dashboard } from '../screens';
import Nav from './nav/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../redux/actions/auth';

export default function Routes() {

    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadUser()), [])

    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )
}