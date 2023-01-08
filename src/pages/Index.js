import "../tailwind.css";
import Logo from "../assets/shared/desktop/logo.svg";
import Cart from "../assets/shared/desktop/icon-cart.svg";
import BurgerMenu from "../assets/shared/tablet/icon-hamburger.svg";
import HeadPhonesIcon from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import IconArrowRight from "../assets/shared/desktop/icon-arrow-right.svg";
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

      <section className="mt-16 px-5">
        <div className="border-5 border-red-200 bg-slate-200 rounded relative mb-10">
          <img src={HeadPhonesIcon} alt="xx99 mark one" />
          <h3 className="text-center font-bold">HEADPHONES</h3>
          <div className="py-4 flex justify-center align-center">
            <p className="text-center px-2 text-slate-500 weight-light cursor-pointer">
              SHOP
            </p>
            <img
              src={IconArrowRight}
              alt="arrow-right"
              height="10"
              width="10"
              className="cursor-pointer"
            ></img>
          </div>
        </div>

        <div className="border-5 border-red-200 bg-slate-200 rounded relative mb-10">
          <img src={HeadPhonesIcon} alt="xx99 mark one" />

          <h3 className="text-center font-bold">SPEAKERS</h3>
          <div className="py-4 flex justify-center align-center">
            <p className="text-center px-2 text-slate-500 weight-light cursor-pointer">
              SHOP
            </p>
            <img
              src={IconArrowRight}
              alt="arrow-right"
              height="10"
              width="10"
              className="cursor-pointer"
            ></img>
          </div>
        </div>

        <div className="border-5 border-red-200 bg-slate-200 rounded relative mb-10">
          <img src={HeadPhonesIcon} alt="xx99 mark one" />

          <h3 className="text-center font-bold">EARPHONES</h3>
          <div className="py-4 flex justify-center align-center">
            <p className="text-center px-2 text-slate-500 weight-light pointer-cursor">
              SHOP
            </p>
            <img
              src={IconArrowRight}
              alt="arrow-right"
              height="10"
              width="10"
              className="cursor-pointer"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Index;
