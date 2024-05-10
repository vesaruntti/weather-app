import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, View } from 'react-native';
import background from '../../assets/images/sunnyBackground.jpg';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const HomeBackground = ({ children }: Props) => {
  return (
    <LinearGradient
      colors={['#289EBB', '#6F7BA1']}
      style={styles.parentWrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} blurRadius={4} source={background} alt="" />
      </View>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  parentWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.4,
  },
});
