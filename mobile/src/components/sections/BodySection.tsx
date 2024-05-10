import moment from 'moment';
import { Image, StyleSheet, Text, View } from 'react-native';
import ringIcon from '../../../assets/images/ringIcon.png';
import { useAppSelector } from '../../store/hooks';
import { fonts } from '../../theme/fonts';

export const BodySection = () => {
  // Get state values from redux
  const conditionText: string = useAppSelector(
    state => state.weather.conditionText,
  );
  const conditionIcon: string = useAppSelector(
    state => state.weather.conditionIcon,
  );
  const temperatureC: string = useAppSelector(
    state => state.weather.temperatueC,
  );

  return (
    <View style={styles.mainWrapper}>
      {/* Date and Time */}
      <View style={styles.dateWrapper}>
        <Text style={styles.dateText}>{moment().format('ddd, DD MMM')}</Text>
        <Text style={styles.timeText}>{moment().format('HH:mm')}</Text>
      </View>
      {/* Weather*/}
      <View style={styles.weatherWrapper}>
        <View style={styles.iconWrapper}>
          <Image
            style={styles.icon}
            source={{
              uri: `https:${conditionIcon}`,
            }}
          />
          <Text style={styles.conditionText}>{conditionText}</Text>
        </View>
        {/* Temperature */}
        <View style={styles.temperatureWrapper}>
          <Text style={styles.temperatureText}>
            {temperatureC.toString().length <= 1
              ? `0${temperatureC}`
              : temperatureC}
          </Text>
          <Image style={styles.ringIcon} source={ringIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 0.525,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateWrapper: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    paddingRight: 5,
    fontFamily: fonts.poppinsMedium,
  },
  timeText: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 5,
    fontFamily: fonts.poppinsMedium,
  },
  weatherWrapper: {
    height: '75%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    height: '100%',
    width: '45%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 60,
    bottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  conditionText: {
    fontFamily: fonts.poppinsLight,
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 3,
    paddingRight: 0,
  },
  temperatureWrapper: {
    height: '100%',
    width: '55%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  temperatureText: {
    fontFamily: fonts.poppinsExtraLight,
    bottom: 5,
    fontSize: 92,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 5,
  },
  ringIcon: {
    position: 'absolute',
    top: 10,
    right: 80,
    width: 17.5,
    height: 17.5,
    resizeMode: 'contain',
  },
});
