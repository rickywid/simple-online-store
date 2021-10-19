import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter as Router } from "react-router-dom";
import theme from './theme/theme';
import './global.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
- User can click on a View Products button on the Landing Page to display the Products Page.
- User can see a card on the Products Page for each Product showing the product thumbnail, name, price, a short description, and a Select button.
- User can see a Product Details page displayed when the Select button is clicked showing the same information from the product card, but also a unique product id, a long description, Add to Cart button, and a See More Products button.
- User can see a confirmation message when the product is added to the shopping cart.
- User can click on the See More Products page to return to the Products Page.
- User can see a Shopping Cart button on both the Landing Page or the Products Page. Hint: a top bar might be a good common location for this button.
- User can click on the Shopping Cart button to display the Shopping Cart page containing the product id, name, price, and quantity ordered input box for each product previously added to the Shopping Cart.
- User can see a total purchase amount on the Shopping Card that is calculated as the sum of the quantities multiplied by the unit price for each product ordered.
- User can adjust the quantity ordered for any product to adjust the total purchase amount.
- User can click a Place Order button on the Shopping Cart Page to complete the order. User will see a confirmation number when the order has been placed.
- User can click a Cancel Order button on the Shopping Cart Page to cancel the order. User will see the product quantities and the total purchase amount reset to zero.
- User can click a See More Products button on the Shopping Cart Page to return to the Products Page. If the order hasn't been placed yet this will not clear the products that have already been added to the Products Page.


- Show confirmation message when item is added to cart
- Show confirmation message when item is added to cart (mobile view)
- Get sandwich images
style navbar
*/