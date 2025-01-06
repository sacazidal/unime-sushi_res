import Logo from "./Header/Logo";
import { socialLinks } from "../constants/Index";
import appStore from "/img/AppLinks/appStore.svg";
import googlePlay from "/img/AppLinks/googlePlay.svg";
import BtnFooter from "./BtnFooter";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 xl:px-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-8 items-center w-full xs:w-[190px] sm:w-1/3">
          <div className="flex flex-col gap-8 items-center">
            <Logo />
          </div>
          <div className="flex flex-col items-center">
            <div className="font-montserrat font-semibold text-base">
              Телефон для заказа
            </div>
            <a
              href="tel:+74993220672"
              className="font-montserrat font-semibold text-sm"
            >
              +7 (499) 322 06 72
            </a>
          </div>
          <div className="xs:hidden flex flex-col items-center">
            <div className="font-montserrat font-semibold text-sm mb-2">
              Режим работы
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <span className="font-montserrat font-medium text-xs">
                Пн-Чт: 11:00 - 22:00
              </span>
              <span className="font-montserrat font-medium text-xs">
                Пт-Вс: 10:00 - 00:00
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="font-montserrat font-semibold text-sm mb-2">
                Мы в соцсетях
              </div>
              <div className="flex gap-3 items-center justify-center">
                {socialLinks.map((link) => (
                  <a
                    className="p-2 bg-orange-600 rounded-md"
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
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-start gap-2">
          <BtnFooter id="роллы" title="Роллы" />
          <BtnFooter
            id="запеченные-роллы"
            title="Запеченные роллы"
          />
          <BtnFooter
            id="горячие-роллы"
            title="Горячие роллы"
          />
          <BtnFooter id="сеты" title="Сеты" />
        </div>
        <div className="hidden md:flex flex-col items-start gap-2">
          <BtnFooter id="закуски" title="Закуски" />
          <BtnFooter id="вок" title="Вок" />
          <BtnFooter id="пицца" title="Пицца" />
          <BtnFooter id="напитки" title="Напитки" />
        </div>
        <div className="hidden xs:flex flex-col items-end gap-10">
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
                className="lg:w-[131px] lg:h-[40px] w-[100px] h-[30px]"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=ru.devcluster.sushiwok&pcampaignid=web_share">
              <img
                src={googlePlay}
                alt="googlePlay"
                target="_blank"
                className="lg:w-[131px] lg:h-[40px] w-[100px] h-[30px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
