import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const App = () => {

  // Load Fonts at the start
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  // TODO: Handle if fonts are not loaded
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
