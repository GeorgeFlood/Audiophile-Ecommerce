import "../tailwind.css";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import BurgerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import HeadPhonesIcon from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SpeakersIcon from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EarphoneIcon from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

import ProductCard from "../components/ProductCard";

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

        <div className=" mt-20 pt-9 text-center mx-4">
          <h3 className=" font-light text-2xl text-slate-400	 tracking-widest pt-8">
            New Product
          </h3>
          <h1 className="font-bold text-3xl pt-2 text-slate-100 tracking-wide my-4">
            XX99 MARK II HEADPHONE
          </h1>
          <p className="text-slate-300">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="text-slate-100 font-bold mt-4 border-8 border-orange-400 bg-orange-400 cursor-pointer">
            See product
          </button>
        </div>
      </header>

      <section className="mt-24 px-5">
        <ProductCard productName="HEADPHONES" productImage={HeadPhonesIcon} />
        <ProductCard productName="SPEAKERS" productImage={SpeakersIcon} />
        <ProductCard productName="EARPHONES" productImage={EarphoneIcon} />
      </section>
    </div>
  );
};
export default Index;
