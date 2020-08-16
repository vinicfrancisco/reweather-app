import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '~/styles/colors';
import { DayWeather } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background: ${colors.black};
  flex-direction: row;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.white};
  font-family: 'Roboto-Medium';
  font-size: 20px;
  line-height: 28px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 16px;
`;

export const DaysList = styled(FlatList as new () => FlatList<DayWeather>)`
  padding: 32px 24px 16px;
`;

export const DayContainer = styled.View`
  background: ${colors.black};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 20px;
`;

export const InfoContainer = styled.View``;

export const DayName = styled.Text`
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
