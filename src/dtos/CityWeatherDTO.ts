export default interface CityWeatherDTO {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [{ main: string }];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  id: number;
}
