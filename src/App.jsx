import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./store/CartContext";

const App = () => {
  return (
    <BrowserRouter basename="/unime-sushi">
      <CartProvider>
        <Header />
        <Routes>
          <Route
            index
            element={<Navigate to="/home" replace />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
