import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import CityWeatherDTO from '~/dtos/CityWeatherDTO';

export interface CityWeather {
  id: number;
  name: string;
  temp: number;
  min: number;
  max: number;
  weather: string;
  lat: number;
  lon: number;
}

interface WeatherContextData {
  citiesWeather: CityWeather[];
  loading: boolean;
  addCity(name: string): void;
  removeCity(id: number): void;
}

const API_KEY = '56cd1e8db1435f9c17de8b0349caaee9';
const apiParams = {
  appid: API_KEY,
  units: 'metric',
  lang: 'pt',
};

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [citiesIds, setCitiesIds] = useState<number[]>([]);
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([
    { id: 1 } as CityWeather,
    { id: 2 } as CityWeather,
    { id: 3 } as CityWeather,
    { id: 4 } as CityWeather,
    { id: 5 } as CityWeather,
  ]);
  const [loading, setLoading] = useState(true);

  const addCity = useCallback(
    async (name: string) => {
      setLoading(true);

      const response = await api.get('/weather', {
        params: {
          q: name,
          ...apiParams,
        },
      });

      const { id, name: cityName, coord, weather, main } = response.data;

      const findCityIds = citiesIds.some((cityId) => id === cityId);

      if (!findCityIds) {
        const cityWeather: CityWeather = {
          id,
          name: cityName,
          lat: coord.lat,
          lon: coord.lon,
          weather: weather[0].main,
          temp: Math.round(main.temp),
          min: Math.round(main.temp_min),
          max: Math.round(main.temp_max),
        };

        const newCitiesIds = [id, ...citiesIds];

        setCitiesIds(newCitiesIds);
        setCitiesWeather((state) => [cityWeather, ...state]);

        await AsyncStorage.setItem(
          '@ReWeather:ids',
          JSON.stringify(newCitiesIds)
        );
      }

      setLoading(false);
    },
    [citiesIds]
  );

  const removeCity = useCallback(
    async (id: number) => {
      const ids = citiesIds.filter((city) => city !== id);

      setCitiesIds(ids);
      setCitiesWeather((state) => state.filter((city) => city.id !== id));

      await AsyncStorage.setItem('@ReWeather:ids', JSON.stringify(ids));
    },
    [citiesIds]
  );

  useEffect(() => {
    async function loadCitiesWeather(): Promise<void> {
      setLoading(true);
      const ids = await AsyncStorage.getItem('@ReWeather:ids');

      if (ids) {
        const parsedIds = JSON.parse(ids);

        if (parsedIds.length > 0) {
          const response = await api.get('/group', {
            params: {
              id: parsedIds.join(','),
              ...apiParams,
            },
          });

          setCitiesIds(parsedIds);
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
        } else {
          setCitiesWeather([]);
        }
      } else {
        setCitiesWeather([]);
      }

      setLoading(false);
    }

    loadCitiesWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        citiesWeather,
        loading,
        addCity,
        removeCity,
      }}
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
