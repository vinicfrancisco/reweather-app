import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { CityWeather } from '~/hooks/weather';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background: ${colors.black};
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.orange};
  font-family: 'Roboto-Medium';
  font-size: 20px;
  line-height: 28px;
`;

export const HeaderWeatherTitle = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Regular';
`;

export const SearchButton = styled.TouchableOpacity``;

export const CitiesList = styled(FlatList as new () => FlatList<CityWeather>)`
  padding: 32px 24px 16px;
`;

export const CityContainer = styled.TouchableOpacity`
  background: ${colors.black};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 20px;
  position: relative;
`;

export const InfoContainer = styled.View``;

export const CityName = styled.Text`
  color: ${colors.orange};
  font-size: 26px;
  font-family: 'Roboto-Medium';
  margin-bottom: 8px;
`;

export const WeatherDescription = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-family: 'Roboto-Regular';
  margin-bottom: 4px;
`;

export const TemperatureRange = styled.Text`
  color: ${colors.gray};
  font-size: 18px;
`;

export const WeatherContainer = styled.View`
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
`;

export const TempeatureContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Temperature = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Medium';
  font-size: 30px;
  margin-right: 16px;
`;

export const RemoveButton = styled.TouchableOpacity``;
