import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useWeather } from '~/hooks/weather';
import colors from '~/styles/colors';
import weatherTypes from '~/utils/weatherTypes';

import CityPlaceholder from './components/CityPlaceholder';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderWeatherTitle,
  SearchButton,
  NoCitiesContainer,
  NoCitiesTitle,
  NoCitiesDescription,
  CitiesList,
  CityContainer,
  InfoContainer,
  CityName,
  WeatherDescription,
  TemperatureRange,
  WeatherContainer,
  TempeatureContainer,
  Temperature,
  RemoveButton,
} from './styles';

interface NavigateToDetailProps {
  lat: number;
  lon: number;
  city: string;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { citiesWeather, loading, removeCity } = useWeather();

  const handleNavigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

  const handleNavigateToDetail = useCallback(
    ({ lat, lon, city }: NavigateToDetailProps) => {
      navigate('City', { lat, lon, city });
    },
    [navigate]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          ReWeather {'\n'}
          <HeaderWeatherTitle>Aqui estão suas cidades</HeaderWeatherTitle>
        </HeaderTitle>

        <SearchButton onPress={handleNavigateToSearch}>
          <Icon name="search" size={28} color={colors.orange} />
        </SearchButton>
      </Header>

      {!citiesWeather.length && (
        <NoCitiesContainer>
          <Icon name="frown" size={120} color={colors.black} />

          <NoCitiesTitle>Sua lista está vazia</NoCitiesTitle>

          <NoCitiesDescription>
            Busque por novas cidades para ver como está o clima
          </NoCitiesDescription>
        </NoCitiesContainer>
      )}

      <CitiesList
        data={citiesWeather}
        keyExtractor={(city) => String(city.id)}
        renderItem={({ item: city }) => (
          <>
            {loading ? (
              <CityPlaceholder />
            ) : (
              <CityContainer
                onPress={() =>
                  handleNavigateToDetail({
                    lat: city.lat,
                    lon: city.lon,
                    city: city.name,
                  })
                }
              >
                <InfoContainer>
                  <CityName>{city.name}</CityName>

                  <WeatherDescription>
                    {weatherTypes[city.weather].title}
                  </WeatherDescription>

                  <TemperatureRange>{`${city.min}ºC - ${city.max}ºC`}</TemperatureRange>
                </InfoContainer>

                <WeatherContainer>
                  <TempeatureContainer>
                    <Temperature>{`${city.temp}ºC`}</Temperature>

                    <Icon
                      name={weatherTypes[city.weather].icon}
                      size={40}
                      color={weatherTypes[city.weather].color}
                    />
                  </TempeatureContainer>

                  <RemoveButton onPress={() => removeCity(city.id)}>
                    <Icon name="trash" size={26} color={colors.red} />
                  </RemoveButton>
                </WeatherContainer>
              </CityContainer>
            )}
          </>
        )}
      />
    </Container>
  );
};

export default Home;
