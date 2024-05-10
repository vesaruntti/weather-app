import Toast from 'react-native-root-toast';
const WEAHER_API_URL = process.env.EXPO_PUBLIC_WEATHER_API_URL;
const WEAHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const fetchWeather = async (text: string) => {
  // Check if search text  has valid lenght
  if (text.length <= 0) {
    Toast.show(`Search field is empty`, {
      duration: Toast.durations.LONG,
    });
    return;
  }

  // Declare request url
  const url: URL = new URL(WEAHER_API_URL!);

  // Declare search parameters
  const searchParams: Record<string, any> = new URLSearchParams();

  // Append search parameters
  searchParams.append('key', WEAHER_API_KEY!);
  searchParams.append('q', text!);
  searchParams.append('days', 5);

  // Assign search params to url search
  url.search = new URLSearchParams(searchParams).toString();

  // Declare fetch options
  const options: RequestInit = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  };

  const response: Response = await fetch(url, options)
    .then(response => {
      if (!response.ok) {
        return response;
      }
      return response;
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });

  // Check response errors more information
  // https://www.weatherapi.com/docs/  ->  API Error Coder
  if (response.status >= 400) {
    const errorMessage = `Request failed: ${response.status}`;
    Toast.show(errorMessage, {
      duration: Toast.durations.LONG,
    });
    return;
  }

  return await response.json();
};
