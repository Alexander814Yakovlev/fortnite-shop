import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Shop from "./components/Shop";
import CartModal from "./components/CartModal";
import React from "react";
import { ContextProvider } from "./context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <CartModal />
        <Shop />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
