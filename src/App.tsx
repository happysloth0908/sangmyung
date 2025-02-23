// App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/loginComponent";
import "./App.css";
import White from "./components/WhitePageComponent";
import Header from "./components/HeaderComponent";
import Sidebar from "./components/SideBarComponent";

function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/white" element={<White />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
