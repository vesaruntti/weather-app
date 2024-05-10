import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../theme/fonts';

// Component prop interface
interface IProps {
  text: string;
}

/**
 * Takes in 1 string, which specifies header name/text.
 *
 * @param {String} text
 */
export const HeaderSection = ({ text }: IProps) => {
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.header}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flex: 0.375,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontFamily: fonts.poppinsMedium,
  },
});
