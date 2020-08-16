import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import {
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteProps,
} from 'react-native-google-places-autocomplete';
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
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  height: 48px;
  justify-content: center;
`;

export const SearchInput = styled(
  GooglePlacesAutocomplete as new () => GooglePlacesAutocomplete<
    GooglePlacesAutocompleteProps
  >
).attrs(() => ({
  placeholderTextColor: '#333',
  styles: {
    container: {
      position: 'absolute',
      left: 32,
      top: Platform.select({ ios: 42, android: 22 }),
      paddingRight: 32,
      width: '100%',
    },
    textInputContainer: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
      borderTopWidth: 0,
      flex: 1,
      paddingHorizontal: 16,
      paddingBottom: 92,
    },
    textInput: {
      backgroundColor: colors.softBlack,
      borderRadius: 10,
      color: colors.white,
      fontSize: 16,
      fontFamily: 'Roboto-Regular',
      height: 48,
      marginRight: 0,
      marginBottom: 50,
      paddingHorizontal: 16,
    },
    listView: {},
    description: {
      color: colors.white,
      fontSize: 18,
    },
    row: {
      backgroundColor: colors.black,
      borderRadius: 10,
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
