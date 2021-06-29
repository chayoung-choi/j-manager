import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {Routes} from "./routes";

const Router = () => {

    const LayoutRoutes = Routes;

    return (
        <Suspense fallback={null}>
            <Switch>
                {LayoutRoutes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact === true}
                            component={route.component}
                        />
                    )
                })}
                <Route path="/*" component={Error}/>
            </Switch>
        </Suspense>
    );
}
export default Router;
