import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import api from '../services/api';

interface City {
  name: string;
  weather: string;
  min: number;
  max: number;
}

interface WeatherContextData {
  cities: City[];
}

export const WeatherContext = createContext<WeatherContextData>(
  {} as WeatherContextData
);

export const WeatherProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    async function loadCities(): Promise<void> {
      const response = await api.get('/weather', {
        q: 'Blumenau',
      });

      setCities([response.data]);
    }

    loadCities();
  }, []);

  return (
    <WeatherContext.Provider value={{ cities }}>
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
