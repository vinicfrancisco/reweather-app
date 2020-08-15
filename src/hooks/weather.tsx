import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

import CityWeatherDTO from '~/dtos/CityWeatherDTO';

interface CityWeather {
  id: number;
  name: string;
  temp: string;
  min: number;
  max: number;
  weather: string;
  lat: number;
  lon: number;
}

interface WeatherContextData {
  citiesWeather: CityWeather[];
  loading: boolean;
  addCity(id: number): void;
  removeCity(id: number): void;
}

const API_KEY = '56cd1e8db1435f9c17de8b0349caaee9';

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [citiesIds, setCitiesIds] = useState<number[]>([3469968]);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [loading, setLoading] = useState(true);

  const addCity = useCallback((id: number) => {
    setCitiesIds((state) => {
      const findCity = state.some((city) => city === id);

      if (!findCity) {
        return [...state, id];
      }

      return state;
    });
  }, []);

  const removeCity = useCallback((id: number) => {
    setCitiesIds((state) => state.filter((city) => city !== id));
  }, []);

  useEffect(() => {
    async function loadCitiesWeather(): Promise<void> {
      try {
        setLoading(true);

        const response = await api.get('/group', {
          params: {
            id: citiesIds.join(','),
            appid: API_KEY,
            units: 'metric',
            lang: 'pt',
          },
        });

        setCitiesWeather(
          response.data.list.map((city: CityWeatherDTO) => {
            const { id, name, coord, main, weather } = city;

            return {
              id,
              name,
              lat: coord.lat,
              lon: coord.lon,
              weather: weather[0].main,
              temp: Math.round(main.temp),
              min: Math.round(main.temp_min),
              max: Math.round(main.temp_max),
            };
          })
        );

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    loadCitiesWeather();
  }, [citiesIds]);

  return (
    <WeatherContext.Provider
      value={{ citiesWeather, loading, addCity, removeCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error('useWeather musb be used within an Weather Provider');
  }

  return context;
}

export default WeatherContext;
