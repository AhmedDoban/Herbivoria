import React, { useState, useEffect } from "react";

import Auth from "./assets/Auth/Auth.jsx";
import Guest from "./assets/Guest/Guest.jsx";

function App() {
  const [AuthLogin, SetAuthLogin] = useState(true);
  return AuthLogin ? <Auth /> : <Guest />;
}

export default App;
