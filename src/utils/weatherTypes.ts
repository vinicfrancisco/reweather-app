interface WeatherType {
  icon: string;
  title: string;
  color: string;
}

interface WeatherTypesList {
  [key: string]: WeatherType;
}

const WeatherTypes: WeatherTypesList = {
  Thunderstorm: {
    icon: 'cloud-lightning',
    title: 'Tempestade',
    color: 'gray',
  },
  Drizzle: {
    icon: 'cloud-drizzle',
    title: 'Chuvisco',
    color: 'gray',
  },
  Rain: {
    icon: 'cloud-rain',
    title: 'Chuva',
    color: 'gray',
  },
  Snow: {
    icon: 'cloud-snow',
    title: 'Neve',
    color: 'gray',
  },
  Clear: {
    icon: 'sun',
    title: 'Tempo Limpo',
    color: 'orange',
  },
  Clouds: {
    icon: 'cloud',
    title: 'Nublado',
    color: 'gray',
  },
};

export default WeatherTypes;
