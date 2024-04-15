//rotas para as urls do site

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home_Page from './../HomePage';
import PostPage from '../PostPage/postPage';
import Header from './../Header';
import LoginPage from './../Login';
import RegisterPage from './../Register';



function RoutesFunction() {
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home_Page} />
                    <Route exact path="/post/:id" component={PostPage} />
                    <Route exact path="/login/" component={LoginPage} />
                    <Route exact path="/register/" component={RegisterPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default RoutesFunction;