export default interface DailyWeatherDTO {
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: [{ main: string }];
}
