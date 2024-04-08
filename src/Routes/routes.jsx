import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home_Page from './../HomePage';
import PostPage from '../PostPage/postPage';


function RoutesFunction() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home_Page} />
                <Route exact path="/post/:id" component={PostPage} />
            </Switch>
        </Router>
    );
}

export default RoutesFunction;