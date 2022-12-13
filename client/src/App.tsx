import "materialize-css";
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { useRoutes } from "./routes";

const App = () => {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader/>
  }

  return (
    <AuthContext.Provider value={{token, userId, login, logout, isAuthenticated}} >
      <Router>
        {isAuthenticated && <Navbar/>}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
