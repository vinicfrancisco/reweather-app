import React, { useCallback, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { fromUnixTime, getDay } from 'date-fns';

import api from '~/services/api';
import colors from '~/styles/colors';
import DailyWeatherDTO from '~/dtos/DailyWeatherDTO';
import weatherTypes from '~/utils/weatherTypes';

import DayPlaceholder from './components/DayPlaceholder';

import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  DaysList,
  DayContainer,
  InfoContainer,
  DayName,
  WeatherDescription,
  TemperatureRange,
  WeatherContainer,
  TempeatureContainer,
  Temperature,
} from './styles';

const API_KEY = '';
const apiParams = {
  appid: API_KEY,
  units: 'metric',
  lang: 'pt',
};

export interface DayWeather {
  date: Date;
  temp: number;
  min: number;
  max: number;
  weather: string;
}

interface RouteParams {
  city: string;
  lat: number;
  lon: number;
}

const City: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();

  const { lat, lon, city } = route.params as RouteParams;

  const [loading, setLoading] = useState(true);
  const [weekWeather, setWeekWeather] = useState<DayWeather[]>([
    {} as DayWeather,
    {} as DayWeather,
    {} as DayWeather,
    {} as DayWeather,
    {} as DayWeather,
    {} as DayWeather,
  ]);

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const getWeekDay = useCallback((date: Date) => {
    const weekDay = getDay(date);

    switch (weekDay) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      default:
        return '';
    }
  }, []);

  useEffect(() => {
    async function loadData(): Promise<void> {
      setLoading(true);
      const response = await api.get('/onecall', {
        params: {
          exclude: 'current,minutely,hourly',
          lat,
          lon,
          ...apiParams,
        },
      });

      setWeekWeather(
        response.data.daily.map((day: DailyWeatherDTO) => {
          const { dt, temp, weather } = day;

          return {
            date: fromUnixTime(dt),
            temp: Math.round(temp.day),
            min: Math.round(temp.min),
            max: Math.round(temp.max),
            weather: weather[0].main,
          };
        })
      );
      setLoading(false);
    }

    loadData();
  }, [lat, lon]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} color={colors.gray} />
        </BackButton>

        <HeaderTitle>{city}</HeaderTitle>
      </Header>

      <DaysList
        data={weekWeather}
        keyExtractor={() => String(Math.random())}
        renderItem={({ item: day }) => (
          <>
            {loading ? (
              <DayPlaceholder />
            ) : (
              <DayContainer>
                <InfoContainer>
                  <DayName>{getWeekDay(day.date)}</DayName>

                  <WeatherDescription>
                    {weatherTypes[day.weather].title}
                  </WeatherDescription>

                  <TemperatureRange>{`${day.min}ºC - ${day.max}ºC`}</TemperatureRange>
                </InfoContainer>

                <WeatherContainer>
                  <TempeatureContainer>
                    <Temperature>{`${day.temp}ºC`}</Temperature>

                    <Icon
                      name={weatherTypes[day.weather].icon}
                      size={40}
                      color={weatherTypes[day.weather].color}
                    />
                  </TempeatureContainer>
                </WeatherContainer>
              </DayContainer>
            )}
          </>
        )}
      />
    </Container>
  );
};

export default City;
