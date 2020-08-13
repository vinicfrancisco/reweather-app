import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/styles/colors';

import {
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

const Weather: React.FC = () => {
  return (
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
  );
};

export default Weather;
