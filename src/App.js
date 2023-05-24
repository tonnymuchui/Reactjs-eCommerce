import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sing-in-&-up/sign-in-&-up";
import React from "react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef,(snapShot) => {
          this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data(),
          }
        });
        console.log(this.state.currentUser);
      });
      }
      this.setState({currentUser: userAuth});
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
