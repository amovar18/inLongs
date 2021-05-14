import React from 'react';
import {Route, Switch} from "react-router-dom";
import Readsingle from './Readsingle';
import Homepage from './Homepage';
import Categorical from './Categorical';
const Mainrouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/read/:name" component={Readsingle}/>
            <Route path="/:category" component={Categorical}/>

        </Switch>
    );
}

export default Mainrouter;
