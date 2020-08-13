import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import FeatherIcon from 'react-native-vector-icons/Feather';
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

export const BackButton = styled.TouchableOpacity``;

export const SearchContainer = styled.View`
  align-items: center;
  background: ${colors.softBlack};
  border-radius: 10px;
  border-color: ${colors.softBlack};
  border-width: 2px;
  flex: 1;
  flex-direction: row;
  height: 48px;
  margin-left: 8px;
  padding: 0 16px;
`;

export const SearchInput = styled.TextInput`
  color: #fff;
  flex: 1;
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const SearchIcon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const CitiesList = styled(FlatList as new () => FlatList)`
  padding: 16px;
`;

export const CityContainer = styled.View`
  align-items: center;
  background: ${colors.black};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
`;

export const CityName = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Medium';
  font-size: 20px;
`;

export const AddCityButton = styled.TouchableOpacity`
  align-items: center;
  background: ${colors.softBlack};
  border-radius: 20px;
  height: 40px;
  justify-content: center;
  width: 40px;
`;
