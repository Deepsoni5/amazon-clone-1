import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run first time
    auth.onAuthStateChanged(authUser => {
      // console.log(authUser)

      if (authUser) {
        //user logged in already
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />

                <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />

                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
