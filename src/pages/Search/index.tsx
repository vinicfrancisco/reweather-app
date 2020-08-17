import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useWeather } from '~/hooks/weather';
import colors from '~/styles/colors';

import { Container, Header, BackButton, SearchInput } from './styles';

const Search: React.FC = () => {
  const { goBack } = useNavigation();
  const { addCity } = useWeather();

  const [searchValue, setSearchValue] = useState('');

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleChangeInput = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handlePressCity = useCallback(
    (data, details = null) => {
      goBack();
      addCity(data.structured_formatting.main_text);
    },
    [goBack, addCity]
  );

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="x" size={24} color={colors.gray} />
        </BackButton>
      </Header>

      <SearchInput
        debounce={300}
        nearbyPlacesAPI="GooglePlacesSearch"
        textInputProps={{
          keyboardAppearance: 'dark',
          placeholderTextColor: colors.gray,
          value: searchValue,
          onChangeText: handleChangeInput,
        }}
        placeholder="Buscar cidade"
        enablePoweredByContainer={false}
        onPress={handlePressCity}
        query={{
          key: 'AIzaSyAgtT_EwKTaqsCTjxgYEGAR7R1B_wh5L0g',
          language: 'pt',
          types: '(cities)',
        }}
      />
    </Container>
  );
};

export default Search;
