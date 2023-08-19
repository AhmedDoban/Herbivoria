import React, { useState, useEffect } from "react";

import Auth from "./assets/Auth/Auth.jsx";
import Guest from "./assets/Guest/Guest.jsx";

function App() {
  const [AuthLogin, SetAuthLogin] = useState(false);
  const [Remember, SetRemember] = useState(false);

  useEffect(() => {
    const LoginCheck = localStorage.getItem("Herbivoria-login");
    const LoginCheckSession = sessionStorage.getItem("Herbivoria-login");

    if (LoginCheck === null && LoginCheckSession === null) {
      SetAuthLogin(false);
    } else if (
      JSON.parse(LoginCheck) === true ||
      JSON.parse(LoginCheckSession) === true
    ) {
      SetAuthLogin(true);
    } else {
      SetAuthLogin(false);
    }
  }, [Remember]);

  return AuthLogin ? (
    <Auth SetAuthLogin={SetAuthLogin} />
  ) : (
    <Guest
      SetAuthLogin={SetAuthLogin}
      Remember={Remember}
      SetRemember={SetRemember}
    />
  );
}

export default App;
