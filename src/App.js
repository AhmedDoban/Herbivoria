import React, { useState, useEffect } from "react";

import Auth from "./assets/Auth/Auth.jsx";
import Guest from "./assets/Guest/Guest.jsx";

function App() {
  const [AuthLogin, SetAuthLogin] = useState(false);
  useEffect(() => {
    const LoginCheck = localStorage.getItem("Herbivoria-login");
    if (LoginCheck === null) {
      SetAuthLogin(false);
    } else if (JSON.parse(LoginCheck) === true) {
      SetAuthLogin(true);
    } else {
      SetAuthLogin(false);
    }
  }, []);

  return AuthLogin ? (
    <Auth SetAuthLogin={SetAuthLogin} />
  ) : (
    <Guest SetAuthLogin={SetAuthLogin} />
  );
}

export default App;
