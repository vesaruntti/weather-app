import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import HomeScreen from './src/screens/HomeScreen';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export const App = () => {
  // Load Fonts at the start
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  // TODO: Handle if fonts are not loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <RootSiblingParent>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShadowVisible: false,
              headerTransparent: true,
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RootSiblingParent>
    </Provider>
  );
};

export default App;
