import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Header from "./component/header/Header";
import { StateProvider, useStateValue } from "./context/StateProvider";
import reducer, { initialState } from "./context/Reducer";
import Checkout from "./page/checkout/Checkout";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
