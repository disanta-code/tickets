import { useState } from "react";

import NavBarHome from "../src/components/layout/NavBarHome.js";
import RegisterUser from "../src/components/layout/RegisterUser.js";
import LoginPage from "../src/pages/Login"; 

import "../src/assets/styles/Home/Home.css";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  if (!isLogged) {
    
    return <LoginPage onSuccess={() => setIsLogged(true)} />;
  }

  return (
    <div>
      <NavBarHome />
      <RegisterUser />
    </div>
  );
}

export default App;
