/* global google */
import { useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

// Выносим массив библиотек в константу
const LIBRARIES = ["marker"];

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 55.7558,
  lng: 37.6176,
};

const locations = [
  { lat: 55.7558, lng: 37.6176, title: "Красная площадь" },
  { lat: 55.752, lng: 37.6155, title: "ГУМ" },
  { lat: 55.7604, lng: 37.6187, title: "Большой театр" },
  { lat: 55.7483, lng: 37.6051, title: "Парк Зарядье" },
  {
    lat: 55.7415,
    lng: 37.6204,
    title: "Храм Василия Блаженного",
  },
];

const Maps = () => {
  const mapRef = useRef(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey:
      "AIzaSyAwsz7PauymkGpO_ic5ZI78cx6gzS0qRzk", // Замените на ваш API ключ
    libraries: LIBRARIES, // Используем константу
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      const initMap = async () => {
        const { Map } = await google.maps.importLibrary(
          "maps",
        );
        const { AdvancedMarkerElement } =
          await google.maps.importLibrary("marker");

        const map = new Map(mapRef.current, {
          center,
          zoom: 13,
          mapId: "ВАШ_MAP_ID", // Укажите ваш Map ID
        });

        locations.forEach((location) => {
          new AdvancedMarkerElement({
            position: {
              lat: location.lat,
              lng: location.lng,
            },
            map,
            title: location.title,
          });
        });
      };

      initMap();
    }
  }, [isLoaded, loadError]);

  if (loadError) return <div>Ошибка загрузки карты</div>;
  if (!isLoaded) return <div>Загрузка...</div>;

  return <div ref={mapRef} style={mapContainerStyle}></div>;
};

export default Maps;
