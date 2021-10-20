import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";
import Landing from "./components/landing";
import Cart from "./components/cart/cart";
import Product from "./components/products/product";
import Products from "./components/products/products";

const routes = (
    <Switch>
        <Route exact path="/">
            <Landing />
        </Route>
        <Route exact path="/products">
            <Products />
        </Route>
        <Route exact path="/product/:product_id">
            <Product />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
    </Switch>
)

export default routes;