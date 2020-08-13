import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/styles/colors';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderWeatherTitle,
  SearchButton,
  CityContainer,
  InfoContainer,
  CityName,
  TemperatureRange,
  WeatherDescription,
  Temperature,
  WeatherContainer,
  TempeatureContainer,
  FavoriteButton,
  CitiesList,
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToSearch = useCallback(() => {
    navigate('Search');
  }, [navigate]);

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
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(city) => city}
        renderItem={({ item: city }) => (
          <CityContainer>
            <InfoContainer>
              <CityName>Blumenau</CityName>

              <WeatherDescription>Nublado</WeatherDescription>

              <TemperatureRange>14ºC - 23ºC</TemperatureRange>
            </InfoContainer>

            <WeatherContainer>
              <TempeatureContainer>
                <Temperature>23ºC</Temperature>

                <Icon name="cloud" size={40} color={colors.gray} />
              </TempeatureContainer>

              <FavoriteButton onPress={() => {}}>
                <Icon name="heart" size={26} color="#f00" />
              </FavoriteButton>
            </WeatherContainer>
          </CityContainer>
        )}
      />
    </Container>
  );
};

export default Home;
