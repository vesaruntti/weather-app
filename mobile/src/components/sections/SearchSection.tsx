import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { fetchWeather } from '../../controllers/weatherController';
import { CoordinateEnum } from '../../enums';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setWeather } from '../../store/reducers/weatherReducer';
import { SearchFieldNumber } from '../fields/SearchFieldNumber';
import { SearchFieldText } from '../fields/SearchFieldText';

export const SearchSection = () => {
  // Redux
  const dispatch = useAppDispatch();

  // Get values from redux store
  const latitude = useAppSelector(state => state.coordinate.lat);
  const longitude = useAppSelector(state => state.coordinate.lon);

  useEffect(() => {
    // Fetch weather with latitude and longitude
    const fetch = async () => {
      const weather = await fetchWeather(`${latitude},${longitude}`);
      if (weather) {
        await dispatch(setWeather(weather));
      }
    };

    // Check if longitude and latitude exist
    if (latitude && longitude) {
      console.log(latitude, longitude);
      fetch();
    }
  }, [latitude, longitude]);

  return (
    <View style={styles.mainWrapper}>
      {/* Text Field / Search */}
      <View style={styles.searchWrapper}>
        <SearchFieldText />
      </View>
      <View style={styles.coordinateWrapper}>
        {/* Number Field / Latitude */}
        <SearchFieldNumber
          coordinateEnum={CoordinateEnum.Latitude}
          range={90}
        />
        {/* Number Field / Longitude */}
        <SearchFieldNumber
          coordinateEnum={CoordinateEnum.Longitude}
          range={180}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 0.65,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchWrapper: {
    height: 'auto',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coordinateWrapper: {
    height: 'auto',
    width: '22.5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 25,
  },
});
