import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();

export const App = () => {

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator/>
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
