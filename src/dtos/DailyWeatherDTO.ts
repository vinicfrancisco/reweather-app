export default interface DailyWeatherDTO {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: [{ main: string }];
}
