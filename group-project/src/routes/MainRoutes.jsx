import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"
import Home from "../pages/Home"

const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default MainRoutes