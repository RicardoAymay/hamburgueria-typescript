import LoginPage from "./Pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import HomePage from "./Pages/HomePage/HomePage";
import { UserProvider } from "./Contexts/UserContext/UserContext";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
        <UserProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </UserProvider>
    </>
  );
}

export default App;
