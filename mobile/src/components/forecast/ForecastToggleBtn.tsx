import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '../../theme/fonts';

// Component prop interface
interface IProps {
  handleToggle: () => void;
}

/**
 * Takes in callback, which specifies what happens when component is pressed.
 *
 * @param {Function} handleToggle
 */
export const ForecastToggleBtn = ({ handleToggle }: IProps) => {
  return (
    <View style={styles.mainWrapper}>
      {/* Toggle Button */}
      <TouchableOpacity style={styles.button} onPress={handleToggle}>
        <Text style={styles.text}>Forecast toggle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 25,
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
  },
  button: {
    width: '75%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: fonts.poppinsMedium,
  },
});
