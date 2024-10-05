import logo from "./logo.svg";
import "./App.css";
import Header from "./Comps/Header/Header";
import Main from "./Pages/Main";
import SocialHeader from "./Comps/Header/SocialHeader";
import HeaderMobile from "./Comps/Header/HeaderMobile";
import { CartProvider } from "./Context/CartContext";
import My_Modal from "./Comps/Modal/Modal";
import { ModalContext, ModalProvider } from "./Context/ModalContext";
import BottomNavbar from "./Comps/BottomNavBar/BottomNavbar";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ModalProvider>
          <SocialHeader />
          <Header />
          <HeaderMobile />
          <Main />
          <BottomNavbar />
          <My_Modal />
        </ModalProvider>
      </CartProvider>
    </div>
  );
}

export default App;
