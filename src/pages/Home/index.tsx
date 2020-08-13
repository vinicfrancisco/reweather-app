import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import colors from '~/styles/colors';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderWeatherTitle,
  SearchButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          ReWeather {'\n'}
          <HeaderWeatherTitle>Aqui estão suas cidades</HeaderWeatherTitle>
        </HeaderTitle>

        <SearchButton onPress={() => {}}>
          <Icon name="search" size={28} color={colors.orange} />
        </SearchButton>
      </Header>
    </Container>
  );
};

export default Home;
