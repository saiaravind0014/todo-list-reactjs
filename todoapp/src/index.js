import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { createRoot } from 'react-dom/client';
// import Footer from "./Footer";
import Foot from "./Foot";

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <Provider store={store}>
    <App />
    {/* <Footer/> */}
    <Foot/>
  </Provider>
);
//ReactDOM.createRoot(rootElement).render(<App />, document.getElementById("root"));