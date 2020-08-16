import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useWeather } from '~/hooks/weather';
import colors from '~/styles/colors';

import weatherTypes from '~/utils/weatherTypes';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderWeatherTitle,
  SearchButton,
  CitiesList,
  CityContainer,
  InfoContainer,
  CityName,
  WeatherDescription,
  TemperatureRange,
  WeatherContainer,
  TempeatureContainer,
  Temperature,
  FavoriteButton,
} from './styles';

interface NavigateToDetailProps {
  lat: number;
  lon: number;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { citiesWeather } = useWeather();

  const handleNavigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

  const handleNavigateToDetail = useCallback(
    ({ lat, lon }: NavigateToDetailProps) => {
      navigate('City', { lat, lon });
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

      <CitiesList
        data={citiesWeather}
        keyExtractor={(city) => String(city.id)}
        renderItem={({ item: city }) => (
          <CityContainer
            onPress={() =>
              handleNavigateToDetail({
                lat: city.lat,
                lon: city.lon,
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
                  color={colors.gray}
                />
              </TempeatureContainer>

              <FavoriteButton onPress={() => {}}>
                <Icon name="heart" size={26} color={colors.red} />
              </FavoriteButton>
            </WeatherContainer>
          </CityContainer>
        )}
      />
    </Container>
  );
};

export default Home;
