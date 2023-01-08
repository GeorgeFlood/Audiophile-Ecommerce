import "../tailwind.css";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import BurgerMenu from "../assets/shared/tablet/icon-hamburger.svg";

const Index = function () {
  return (
    <div>
      <header className="bg-mobile-hero bg-no-repeat bg-cover bg-center min-h-screen min-w-screen overflow-hidden">
        <div className="flex justify-around py-8 border-b-2 ">
          <div>
            <img src={BurgerMenu} alt="burger menu" />
          </div>

          <div>
            <img src={Logo} alt="logo" />
          </div>

          <div>
            <img src={Cart} alt="Cart image" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Index;
