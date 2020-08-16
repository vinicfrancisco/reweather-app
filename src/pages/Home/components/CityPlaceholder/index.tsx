import React from 'react';
import { Placeholder, Shine, PlaceholderLine } from 'rn-placeholder';

import colors from '~/styles/colors';

import { Container } from './styles';

const CityPlaceholder: React.FC = () => (
  <Container>
    <Placeholder Animation={Shine}>
      <PlaceholderLine
        style={{ backgroundColor: colors.softBlack }}
        height={25}
        width={80}
      />
      <PlaceholderLine
        style={{ backgroundColor: colors.softBlack }}
        height={12}
        width={50}
      />
      <PlaceholderLine
        style={{ backgroundColor: colors.softBlack }}
        height={10}
        width={30}
      />
    </Placeholder>
  </Container>
);

export default CityPlaceholder;
