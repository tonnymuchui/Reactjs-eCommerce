import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sing-in-&-up/sign-in-&-up";
import { getAuth } from "firebase/auth";
import React from "react";

class App extends React.Component {
constructor() {
  super();

  this.state = {
    currentUser: null,
  }
}

unsubscribeFromAuth = null;
componentDidMount() {
  const auth = getAuth(); 
 this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user});
    console.log(user);
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}
  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}
}
export default App;
