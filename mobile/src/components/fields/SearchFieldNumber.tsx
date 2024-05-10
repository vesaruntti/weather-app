import { useEffect, useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import Toast from 'react-native-root-toast';
import { useDispatch } from 'react-redux';
import { CoordinateEnum } from '../../enums';
import { useAppSelector } from '../../store/hooks';
import { setCoordinate } from '../../store/reducers/coordinatesReducer';

// Component prop interface
interface IProps {
  coordinateEnum: CoordinateEnum;
  range: number;
}

export const SearchFieldNumber = ({ coordinateEnum, range }: IProps) => {
  const [text, setText] = useState<string>('');
  const inputRef = useRef<TextInput | null>(null);

  // Redux
  const dispatch = useDispatch();
  let coordinate: string | null = null;

  // Initialize coordinate with corresponding redux value
  if (coordinateEnum === CoordinateEnum.Latitude) {
    coordinate = coordinate = useAppSelector(state => state.weather.lat);
  }
  if (coordinateEnum === CoordinateEnum.Longitude) {
    coordinate = coordinate = useAppSelector(state => state.weather.lon);
  }

  useEffect(() => {
    // Update text state if coordinate changes
    if (coordinate) {
      setText(coordinate.toString());
    }
  }, [coordinate]);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setText(e.nativeEvent.text);
  };

  const handleSubmit = async () => {
    // Check text lenght
    if (text.length <= 0) {
      // Set redux store state
      dispatch(setCoordinate({ coordinateEnum, text: '' }));
      return;
    }

    // Check if string only contains valid character for numeric value
    const isValid = /^[0-9,.-]*$/.test(text);

    // Text was a valid
    if (isValid) {
      // Parse string to float
      const value = parseFloat(text);

      // Check if value is in correct range
      if (value >= -range && value <= range) {
        // Set redux store state
        dispatch(setCoordinate({ coordinateEnum, text }));
      } else {
        const errorMessage = `Please input a valid coordinate, in range ${-range} / ${range}`;
        Toast.show(errorMessage, {
          duration: Toast.durations.LONG,
        });
      }
    }
    // Text was not a valid
    else {
      setText('');
      const errorMessage = `Please input a coordinate`;
      Toast.show(errorMessage, {
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.textWrapper}>
        {/* Label */}
        <Text style={styles.text}>{CoordinateEnum[coordinateEnum]}</Text>
      </View>
      <View style={styles.inputWrapper}>
        {/* Input */}
        <TextInput
          editable
          keyboardType="numeric"
          style={styles.input}
          placeholder={
            inputRef.current?.isFocused() || text !== '' ? undefined : '--.--'
          }
          ref={inputRef}
          value={text}
          onChange={handleChange}
          onSubmitEditing={handleSubmit}
          onBlur={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: 90,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 0.5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  inputWrapper: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
});
