import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Path from "./utils/path";
import { Home, Login, Public } from "./pages/public";
function App() {
  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={Path.PUBLIC} element={<Public />}>
          <Route path={Path.HOME} element={<Home />} />
          <Route path={Path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
