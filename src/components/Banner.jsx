import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mainBanners } from "../constants/Index";

const Banner = () => {
  const settings = {
    dots: false, // Показывать точки-индикаторы
    infinite: true, // Бесконечная прокрутка
    speed: 1500, // Скорость перехода
    slidesToShow: 1, // Количество показываемых слайдов
    slidesToScroll: 1, // Количество слайдов для прокрутки
    autoplay: true, // Включить автоматическое переключение
    autoplaySpeed: 5000, // Интервал переключения (3 секунды)
    arrows: false, // Показывать стрелки
  };

  return (
    <div className="lg:mb-20 sm:mb-10 mb-5">
      <Slider {...settings}>
        {mainBanners.map((banner) => (
          <img
            key={banner.id}
            src={banner.img}
            alt={banner.id}
            className="rounded-2xl w-full xl:h-[460px] lg:h-[420px] md:h-[360px] sm:h-[300px] xs:h-[220px] h-[120px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
