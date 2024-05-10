export interface IDay {
  avghumidity: string;
  avgtemp_c: string;
  avgtemp_f: string;
  avgvis_km: string;
  avgvis_miles: string;
  condition: {
    icon: string;
    text: string;
  };
  daily_chance_of_rain: string;
  daily_chance_of_snow: string;
  daily_will_it_rain: string;
  daily_will_it_snow: string;
  maxtemp_c: string;
  maxtemp_f: string;
  maxwind_kph: string;
  maxwind_mph: string;
  mintemp_c: string;
  mintemp_f: string;
  totalprecip_in: string;
  totalprecip_mm: string;
  totalsnow_cm: string;
  uv: string;
}
