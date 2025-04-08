import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./profile.css";
import { app } from "../Firebase";
import Default from "../imgs/default.png";
import USER from "../imgs/user.png";
import contact from "../imgs/contact.png";
import LowerNav from "../Components/LowerNav";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ShippingDetailsCard from "../Components/ShippingDetailsCard";

const auth = getAuth(app);

function Profile() {
  const [user, setUser] = useState(null);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const checkDP = () => {
    // if (user && user.photoURL && user.photoURL.includes("https")) {
    //   setImage(user.photoURL);
    // } else if (user && user.photoURL && user.photoURL.includes("http")) {
    //   const newImage = user.photoURL.replace(/^http:\/\//i, "https://");
    //   setImage(newImage);
    // } else {
    //   setImage(Default);
    // }
    setImage(Default)
  };

  useEffect(() => {
    checkDP();
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={user ? { height: "fit-content" } : { height: "70vh" }}
        className="profile-section"
      >
        <div className={user ? `account-section animate` : `account-section`}>
          <div className="top-section">
            <p className="welcome-mssg">
              {user ? `Welcome, ${user.displayName}` : ""}
            </p>
          </div>
          <div className="account-section2">
            <div className="left-account-section">
              <img src={image} className="profile-img" />
              <p className="profile-name">
                {user ? `${user.displayName}` : ""}
              </p>
              <p className="profile-email">{user ? `${user.email}` : ""}</p>
            </div>

            {/* fill in details here */}
            <div className="right-account-section">
                <ShippingDetailsCard />
            </div>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      <Footer />
    </>
  );
}

export default Profile;
