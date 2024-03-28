import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quotes from "./Pages/Quotes";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Quotes />} />
          </Routes>
        </BrowserRouter>
        {/* <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Quotes />} />
        <Route path="/you've-got-this-quotes" element={<Quotes />} />
              <Route path="/why-quotes" element={<Quotes />} />
              <Route path="/who-iam-quotes" element={<Quotes />} />
              <Route
                path="/unbreakable-mother-daughter-bond-quotes"
                element={<Quotes />}
              />
              <Route path="/trusting-your-gut-quotes" element={<Quotes />} />
              <Route path="/trust-your-instincts-quotes" element={<Quotes />} />
              <Route path="/treat-yourself-quotes" element={<Quotes />} />
              <Route path="/tired-of-trying-quotes" element={<Quotes />} />
              <Route path="/top-g-quotes" element={<Quotes />} />
              <Route path="/thursday motivation quotes" element={<Quotes />} />
              <Route
                path="/the-body-keeps-the-score-quotes"
                element={<Quotes />}
              />
              <Route path="/the-company-you-keep-quote" element={<Quotes />} />
              <Route path="/thanksgiving-quotes-to-god" element={<Quotes />} />

              <Route
                path="/thinking-and-praying-for-you-quotes"
                element={<Quotes />}
              />

              <Route path="/sunday-prayer-quotes" element={<Quotes />} />

              <Route
                path="/sunday-morning-inspirational-quotes"
                element={<Quotes />}
              />

              <Route path="/slay-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />
              <Route path="/silver-lining-quotes" element={<Quotes />} />
              <Route path="/silver-lining-quotes" element={<Quotes />} />

              <Route path="/silver-lining-quotes" element={<Quotes />} />
        </Route>
          </Routes>
        </BrowserRouter> */}
      </div>
    );
  }
}

export default App;
