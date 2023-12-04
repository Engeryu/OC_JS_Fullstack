import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DataFetcher } from "./data/dataFetcher";
import About from "./pages/About/About";
import Advertisement from "./pages/Advertisement/Advertisement";
import Error404 from "./pages/Error404/Error404";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

/**
 * Fetch prototyping sample data and init a React app including a React Router.
 * @param {DataFetcher} dataFetcher
 */
async function initApp(dataFetcher) {
  const advertisementsList = await dataFetcher.fetchSource();

  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <div className="content-wrapper">
          <Header className="nav_page" />

          <Switch>
            <Route exact path="/">
              <Home advertisements={advertisementsList.advertisements} />
            </Route>

            <Route path="/a-propos">
              <About />
            </Route>

            <Route
              path="/location/:id"
              render={(props) => (
                <Advertisement
                  advertisementsList={advertisementsList}
                  {...props}
                />
              )}
            ></Route>

            <Route>
              <Error404 />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

const DATA_SOURCE = "../data/sample-data.json";
const dataFetcher = new DataFetcher(DATA_SOURCE);

initApp(dataFetcher);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
