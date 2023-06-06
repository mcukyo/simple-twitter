import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          {/* <Route path="*" element={<HomePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
