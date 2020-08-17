import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background: ${colors.black};
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  padding-top: ${getStatusBarHeight() + 24}px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  height: 48px;
  justify-content: center;
`;

export const SearchInput = styled(GooglePlacesAutocomplete).attrs(() => ({
  placeholderTextColor: colors.gray,
  styles: {
    container: {
      top: Platform.select({ ios: 42, android: 36 }),
      width: '100%',
    },
    textInputContainer: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      borderTopWidth: 0,
      left: 44,
      paddingBottom: 92,
      paddingRight: 60,
    },
    textInput: {
      backgroundColor: colors.softBlack,
      borderRadius: 10,
      color: colors.white,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      height: 48,
      marginRight: 0,
    },
    listView: {},
    description: {
      color: colors.white,
      fontSize: 18,
    },
    row: {
      backgroundColor: colors.black,
      borderRadius: 10,
      marginHorizontal: 16,
      padding: 20,
      height: 80,
    },
    separator: {
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      height: 16,
    },
  },
}))``;
