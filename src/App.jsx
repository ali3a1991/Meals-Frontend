import { Route, Routes } from "react-router-dom";
import Onboarding from "./components/pages/Onboarding";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ShoppingList from "./components/pages/ShoppingList";
import Access from "./components/pages/Access";
import Favourite from "./components/pages/Favourite";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shoppinglist" element={<ShoppingList />} />
      <Route path="/access" element={<Access />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
}

export default App;
