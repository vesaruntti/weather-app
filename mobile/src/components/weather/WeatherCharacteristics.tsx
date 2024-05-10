import { Fragment, useEffect, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import humidityIcon from '../../../assets/images/humidityIcon.png';
import pressureIcon from '../../../assets/images/pressureIcon.png';
import uvIcon from '../../../assets/images/uvIcon.png';
import windIcon from '../../../assets/images/windIcon.png';
import { fonts } from '../../theme/fonts';

// Component prop interface
interface IProps {
  variant: string;
  value: string;
  suffix: string;
}

// Variant types
type Variant = 'humidity' | 'wind' | 'pressure' | 'uv';

// Record initialization for images
const variants: Record<Variant, Image> = {
  humidity: humidityIcon,
  wind: windIcon,
  pressure: pressureIcon,
  uv: uvIcon,
};

/**
 * Takes in 3 string properties, which specify how component is displayed.
 * Variant is used for selecting image and displaying correct label for the component.
 * Value is used to display text in the component.
 * Suffix is applied at the end of text if provided.
 *
 * @param {String} variant
 * @param {String} value
 * @param {String} suffix
 */
export const WeatherCharacteristics = ({
  variant,
  value = '--',
  suffix = '?',
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
      <Image style={styles.image} source={image} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{suffix ? value + suffix : value}</Text>
        <Text style={styles.label}>{variant}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 0.5,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 10,
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: fonts.poppinsRegular,
  },
  label: {
    fontSize: 12,
    color: 'white',
    textTransform: 'capitalize',
    fontFamily: fonts.poppinsRegular,
  },
});
