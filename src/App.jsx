import { useState } from "react";
import Dashboard from "./pages/dashboard.jsx";
import Login from "./pages/login.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return <Dashboard />;
}

export default App;