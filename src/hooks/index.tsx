import React from 'react';

import { WeatherProvider } from './weather';

const AppProvider: React.FC = ({ children }) => (
  <WeatherProvider>{children}</WeatherProvider>
);

export default AppProvider;
