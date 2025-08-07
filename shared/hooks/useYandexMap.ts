import { useEffect, useRef } from 'react';

interface YMapWindow extends Window {
  ymaps: any;
}

export function useYandexMap(center: [number, number], zoom: number) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    const ymapWindow = window as unknown as YMapWindow;

    function initMap() {
      if (mapRef.current && !mapInstance.current) {
        mapInstance.current = new ymapWindow.ymaps.Map(mapRef.current, {
          center,
          zoom,
        });
      }
    }

    if (ymapWindow.ymaps) {
      ymapWindow.ymaps.ready(initMap);
    } else {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=ВАШ_КЛЮЧ';
      script.async = true;
      script.onload = () => {
        ymapWindow.ymaps.ready(initMap);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        if (mapInstance.current) {
          mapInstance.current.destroy();
        }
      };
    }
  }, [center, zoom]);

  return mapRef;
}