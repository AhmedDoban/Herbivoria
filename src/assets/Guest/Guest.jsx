import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Loading from "../Components/Loading/Loading";
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register"));
const NotFounded = lazy(() => import("../Components/Not Founded/NotFounded"));

function Guest({ SetAuthLogin }) {
  return (
    <React.Fragment>
      <div className="Guest">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="" element={<Login SetAuthLogin={SetAuthLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFounded style={`full`} />} />
          </Routes>
        </Suspense>
      </div>
    </React.Fragment>
  );
}
export default Guest;
