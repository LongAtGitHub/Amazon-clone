import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Load from "./imgs/spin.gif";
import { app } from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ProductPage from "./pages/ProductPage";
import CartSection from "./pages/CartSection";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Error from "./pages/Error";
import ShipDetails from "./pages/ShipDetails";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div className="loading">
          <img src={Load} className="loading-img" />
        </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Signin />} />
        <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
        {user && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/wishlists" element={<Lists />} />
            <Route path="/cart" element={<CartSection />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/account" element={<Profile />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/account/shipping-details" element={<ShipDetails />}></Route>
            <Route path="*" element={<Error/>} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
