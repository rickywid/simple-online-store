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
        <Route path="/products">
            <Products />
        </Route>
        <Route path="/product/:product_id">
            <Product />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
    </Switch>
)

export default routes;