import moment from 'moment';
import { Image, StyleSheet, Text, View } from 'react-native';
import ringIcon from '../../../assets/images/ringIcon.png';
import { IDay } from '../../interfaces';

/**
 * Takes in 2 properties, which specify how component is displayed.
 * Date is used to display date in the component.
 * IDay contains all the other component displayed data.
 *
 * @param {string} date
 * @param {IDay} day
 */
export const ForecastListItem = ({
  date,
  day,
}: {
  date: string;
  day: IDay;
}) => {
  return (
    <View style={styles.itemWrapper}>
      {/* Date */}
      <View
        style={[styles.wrapper, { justifyContent: 'center', width: '25%' }]}>
        <Text style={styles.text}>{moment(date).format('MMM DD')}</Text>
      </View>
      {/* Image */}
      <View
        style={[styles.wrapper, { justifyContent: 'center', width: '10%' }]}>
        <Image
          style={styles.weatherIcon}
          source={{ uri: `https:${day.condition.icon}` }}
        />
      </View>
      {/* Temperature */}
      <View
        style={[
          styles.wrapper,
          { justifyContent: 'space-evenly', width: '40%' },
        ]}>
        <Text style={styles.text}>{day.mintemp_c}</Text>
        <Image style={[styles.ringIcon, { right: 15 }]} source={ringIcon} />
        <Text style={styles.text}>-</Text>
        <Text style={styles.text}>{day.maxtemp_c}</Text>
        <Image style={[styles.ringIcon, { right: 90 }]} source={ringIcon} />
      </View>
      {/* Weather Condition */}
      <View
        style={[styles.wrapper, { justifyContent: 'center', width: '25%' }]}>
        <Text style={styles.text}>{day.condition.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    height: 'auto',
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  wrapper: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherIcon: {
    height: 30,
    width: 30,
  },
  ringIcon: {
    position: 'absolute',
    top: 3,
    width: 4,
    height: 4,
  },
});
