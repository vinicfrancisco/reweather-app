import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  BackButton,
  SearchContainer,
  SearchInput,
  SearchIcon,
  CitiesList,
  CityContainer,
  CityName,
  AddCityButton,
} from './styles';
import colors from '~/styles/colors';

const Search: React.FC = () => {
  const { goBack } = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleChangeInput = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="x" size={24} color={colors.gray} />
        </BackButton>

        <SearchContainer>
          <SearchIcon
            name="search"
            size={20}
            color={isFocused ? colors.orange : colors.gray}
          />

          <SearchInput
            keyboardAppearance="dark"
            placeholder="Buscar cidade"
            placeholderTextColor={colors.gray}
            value={searchValue}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChangeText={handleChangeInput}
          />
        </SearchContainer>
      </Header>

      <CitiesList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(city) => city}
        renderItem={({ item: city }) => (
          <CityContainer>
            <CityName>Blumenau</CityName>

            <AddCityButton onPress={() => {}}>
              <Icon name="plus" size={25} color={colors.orange} />
            </AddCityButton>
          </CityContainer>
        )}
      />
    </Container>
  );
};

export default Search;
