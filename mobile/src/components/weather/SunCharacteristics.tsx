import { Fragment, useEffect, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import sunriseIcon from '../../../assets/images/sunriseIcon.png';
import sunsetIcon from '../../../assets/images/sunsetIcon.png';
import { fonts } from '../../theme/fonts';

// Component prop interface
interface IProps {
  variant: string;
  time: string;
}

// Variant types
type Variant = 'sunset' | 'sunrise';

// Record initialization for images
const variants: Record<Variant, Image> = {
  sunset: sunsetIcon,
  sunrise: sunriseIcon,
};

/**
 * Takes in 2 string properties, which specify how component is displayed.
 * Variant is used for selecting image and displaying correct text for the component.
 * Time is used to display time text in the component.
 *
 * @param {String} variant
 * @param {String} time
 */
export const SunCharacteristics = ({
  variant = 'default',
  time = '--:-- --',
}: IProps) => {
  const [image, setImage] = useState<ImageSourcePropType | undefined>(
    undefined,
  );

  useEffect(() => {
    // Find correct image for variant
    Object.keys(variants).find((val, key) => {
      if (val === variant) {
        setImage(
          Object.values(variants)[key] as ImageSourcePropType | undefined,
        );
      }
    });
  }, [variant]);

  return (
    <Fragment>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={image} alt={`${variant} icon`} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{variant}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 0.35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 35,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 0.65,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  text: {
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: fonts.poppinsRegular,
  },
  time: {
    fontSize: 12,
    color: 'white',
    fontFamily: fonts.poppinsRegular,
  },
});
