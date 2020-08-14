import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import colors from '~/styles/colors';

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

const City: React.FC = () => {
  const { goBack } = useNavigation();

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack}>
          <Icon name="chevron-left" size={24} color={colors.gray} />
        </BackButton>

        <HeaderTitle>Blumenau</HeaderTitle>
      </Header>

      <DaysList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(city) => city}
        renderItem={({ item: city }) => (
          <DayContainer>
            <InfoContainer>
              <DayName>Segunda</DayName>

              <WeatherDescription>Sol aberto</WeatherDescription>

              <TemperatureRange>20ºC - 25ºC</TemperatureRange>
            </InfoContainer>

            <WeatherContainer>
              <TempeatureContainer>
                <Temperature>23ºC</Temperature>

                <Icon name="sun" size={40} color={colors.orange} />
              </TempeatureContainer>
            </WeatherContainer>
          </DayContainer>
        )}
      />
    </Container>
  );
};

export default City;
