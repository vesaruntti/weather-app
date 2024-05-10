import { useEffect, useRef, useState } from 'react';
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import homeIcon from '../../../assets/images/homeIcon.png';
import { fetchWeather } from '../../controllers/weatherController';
import { useAppSelector } from '../../store/hooks';
import { setWeather } from '../../store/reducers/weatherReducer';

export const SearchFieldText = () => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<TextInput | null>(null);

  const dispatch = useDispatch();

  // Get values from redux store
  const name: string = useAppSelector(state => state.weather.name);
  const country: string = useAppSelector(state => state.weather.country);

  useEffect(() => {
    // Update text state if name and country exist
    if (name && country) {
      setText(`${name}, ${country}`);
    }
  }, [name, country]);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setText(e.nativeEvent.text);
  };

  const handleSubmit = async () => {
    const weather = await fetchWeather(text);
    if (weather) {
      // Set redux store state
      await dispatch(setWeather(weather));
      // ! NOTICE !
      //TODO: Dismiss numeric keyboard
    }
  };

  return (
    <View style={styles.mainWrapper}>
      {/* Input */}
      <TextInput
        editable
        ref={inputRef}
        value={text}
        onChange={handleChange}
        style={styles.inputFieldBackground}
        placeholder={
          inputRef.current?.isFocused() || text !== ''
            ? undefined
            : 'City or Country'
        }
        onSubmitEditing={handleSubmit}
      />
      <Image style={styles.image} source={homeIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  inputFieldBackground: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 40,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    color: 'black',
  },
  image: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 15,
  },
});
