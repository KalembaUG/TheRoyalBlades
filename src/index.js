import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
            <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
            </Provider>
        </React.Fragment>
);

