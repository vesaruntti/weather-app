import Toast from 'react-native-root-toast';
const WEAHER_API_URL = process.env.EXPO_PUBLIC_WEATHER_API_URL;
const WEAHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

export const fetchWeather = async (searchText: string) => {
    // Check if search text  has valid lenght
    if (searchText.length <= 0) {
        Toast.show(`Search fields are empty`, {
            duration: Toast.durations.LONG,
        });
        return;
    }
    
    // Declar request url
    const url: URL = new URL(WEAHER_API_URL!);

    // Declare search parameters
    const searchParams: Record<string, any> = new URLSearchParams();

    // Append search parameters
    searchParams.append('key', WEAHER_API_KEY!);
    searchParams.append('q', searchText!);

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

    await fetch(url, options)
        .then(response => {
            if (!response.ok) {
                const errorMessage = `Request failed: ${response.status}`;
                Toast.show(errorMessage, {
                    duration: Toast.durations.LONG,
                });
            }
            return response;
        })
        .then(async returnedResponse => {
            const weatherData = await returnedResponse.json();
            console.log(weatherData);
        })
        .catch(err => {
            Toast.show(`Request failed: ${err}`, {
                duration: Toast.durations.LONG,
            });
        });
};