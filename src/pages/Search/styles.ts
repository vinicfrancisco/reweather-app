import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
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
