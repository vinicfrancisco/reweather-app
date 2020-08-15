interface WeatherType {
  icon: string;
  title: string;
}

interface WeatherTypesList {
  [key: string]: WeatherType;
}

const WeatherTypes: WeatherTypesList = {
  ThunderStorm: {
    icon: 'cloud-lightning',
    title: 'Tempestade',
  },
  Drizzle: {
    icon: 'cloud-drizzle',
    title: 'Chuvisco',
  },
  Rain: {
    icon: 'cloud-rain',
    title: 'Chuva',
  },
  Snow: {
    icon: 'cloud-snow',
    title: 'Neve',
  },
  Clear: {
    icon: 'sun',
    title: 'Tempo Limpo',
  },
  Clouds: {
    icon: 'cloud',
    title: 'Nublado',
  },
};

export default WeatherTypes;
