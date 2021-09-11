import React, { Component, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Spinner from '../common/spinner/spinner'


const LazyUserComponent = lazy(() => import("../user/index"));
const LazyDashboard = lazy(() => import("../dashboard/index"));
const LazyAddUserComponent = lazy(() => import('../forms/addUser'));
export class Router extends Component {

    render() {
        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route 
                        exact
                        path="/users"
                        render={(matchprops) => (
                        <Suspense fallback={<Spinner />}>
                            <LazyUserComponent {...matchprops} />
                        </Suspense>
                        )}
                    />
                    <Route 
                        exact
                        path="/add-user"
                        render={(matchprops) => (
                        <Suspense fallback={<Spinner />}>
                            <LazyAddUserComponent {...matchprops} />
                        </Suspense>
                        )}
                    />
                    <Route
                        // exact
                        path="/"
                        render={(matchprops) => (
                            <Suspense fallback={<Spinner />}>
                                <LazyDashboard {...matchprops} />
                            </Suspense>
                        )}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router
