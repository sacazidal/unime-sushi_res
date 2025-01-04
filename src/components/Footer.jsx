import { scroller } from "react-scroll";
import Logo from "./Header/Logo";
import { socialLinks } from "../constants/Index";
import appStore from "/img/AppLinks/appStore.svg";
import googlePlay from "/img/AppLinks/googlePlay.svg";

const Footer = () => {
  const handleScrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 500,
      smooth: true,
      //offset: -100,
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <Logo />
          </div>
          <div>
            <a
              href="tel:+74993220672"
              className="font-montserrat font-semibold text-base"
            >
              +7 (499) 322 06 72
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("роллы")}
          >
            Роллы
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() =>
              handleScrollTo("запеченные-роллы")
            }
          >
            Запеченные роллы
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("горячие-роллы")}
          >
            Горячие роллы
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("сеты")}
          >
            Сеты
          </button>
        </div>

        <div className="flex flex-col items-start gap-2">
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("закуски")}
          >
            Закуски
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("вок")}
          >
            Вок
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("пицца")}
          >
            Пицца
          </button>
          <button
            className="font-montserrat font-semibold text-base"
            onClick={() => handleScrollTo("напитки")}
          >
            Напитки
          </button>
        </div>
        <div className="flex flex-col items-end gap-10">
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                className="p-3 bg-orange-600 rounded-xl"
                key={link.id}
                href={link.url}
                target="_blank"
              >
                <div className="text-white">
                  {link.icon}
                </div>
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <a href="https://apps.apple.com/ru/app/суши-wok-доставка-еды/id673954325">
              <img
                src={appStore}
                alt="appStore"
                target="_blank"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ru.devcluster.sushiwok&pcampaignid=web_share">
              <img
                src={googlePlay}
                alt="googlePlay"
                target="_blank"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
