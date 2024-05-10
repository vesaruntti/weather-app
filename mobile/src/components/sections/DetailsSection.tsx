import moment from 'moment';
import { StyleSheet, View } from 'react-native';
import { useAppSelector } from '../../store/hooks';
import { SunCharacteristics } from '../weather/SunCharacteristics';
import { WeatherCharacteristics } from '../weather/WeatherCharacteristics';

export const DetailsSection = () => {
  // Get state values from redux
  const humidity: string = useAppSelector(state => state.weather.humidity);
  const windKph: string = useAppSelector(state => state.weather.windKph);
  const pressureMb: string = useAppSelector(state => state.weather.pressureMb);
  const uv: string = useAppSelector(state => state.weather.uv);
  const sunrise: string = useAppSelector(state => state.weather.sunrise);
  const sunset: string = useAppSelector(state => state.weather.sunset);

  return (
    <View style={styles.mainWrapper}>
      {/* Weather Characteristics */}
      <View style={styles.detailsWrapper}>
        {/* Humidity */}
        <View style={styles.weatherCharWrapper}>
          <WeatherCharacteristics
            variant="humidity"
            value={humidity}
            suffix="%"
          />
        </View>
        {/* Wind */}
        <View style={styles.weatherCharWrapper}>
          <WeatherCharacteristics
            variant="wind"
            value={windKph}
            suffix="km/h"
          />
        </View>
        {/* Pressure */}
        <View style={styles.weatherCharWrapper}>
          <WeatherCharacteristics
            variant="pressure"
            value={pressureMb}
            suffix="m/Bar"
          />
        </View>
        {/* UV */}
        <View style={styles.weatherCharWrapper}>
          <WeatherCharacteristics variant="uv" value={uv} suffix="" />
        </View>
      </View>
      {/* Sun Characteristics */}
      <View style={styles.timeWrapper}>
        {/* Sunrise */}
        <View style={styles.sunCharWrapper}>
          <SunCharacteristics
            variant="sunrise"
            time={moment(sunrise, ['h:mm A']).format('HH:mm')}
          />
        </View>
        {/* Sunset */}
        <View style={styles.sunCharWrapper}>
          <SunCharacteristics
            variant="sunset"
            time={moment(sunset, ['h:mm A']).format('HH:mm')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    position: 'absolute',
    bottom: 0,
    height: '30%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  detailsWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  weatherCharWrapper: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunCharWrapper: {
    display: 'flex',
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  timeWrapper: {
    flex: 0.4,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
