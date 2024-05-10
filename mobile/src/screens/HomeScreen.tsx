import { Fragment, useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { HomeBackground } from '../components/HomeBackground';
import { ForecastList } from '../components/forecast/ForeastList';
import { ForecastToggleBtn } from '../components/forecast/ForecastToggleBtn';
import { BodySection } from '../components/sections/BodySection';
import { DetailsSection } from '../components/sections/DetailsSection';
import { HeaderSection } from '../components/sections/HeaderSection';
import { SearchSection } from '../components/sections/SearchSection';
import { useAppSelector } from '../store/hooks';

export const HomeScreen = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [showForecast, setShowForecast] = useState(false);
  const forecast: [] = useAppSelector(state => state.weather.forecast);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    if (currentDate === null) {
      setCurrentDate(new Date());
    }
  }, [currentDate]);

  const handleToggle = () => {
    setShowForecast(!showForecast);
  };

  return (
    <HomeBackground>
      <View
        style={[
          styles.mainWrapper,
          { flex: forecast.length > 0 && !keyboardStatus ? 0.7 : 1 },
        ]}>
        <HeaderSection text="Header" />
        <BodySection />
        <SearchSection />
        {forecast.length > 0 && !keyboardStatus && (
          <ForecastToggleBtn handleToggle={handleToggle} />
        )}
      </View>
      {!keyboardStatus && !showForecast && forecast.length > 0 ? (
        <DetailsSection />
      ) : (
        <Fragment></Fragment>
      )}
      {!keyboardStatus && showForecast ? (
        <ForecastList forecast={forecast} />
      ) : (
        <Fragment></Fragment>
      )}
    </HomeBackground>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default HomeScreen;
