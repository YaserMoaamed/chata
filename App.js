import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnbordingScreen from './screen/OnbordingScreen';
import LoginScreen from './screen/LoginScreen';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLanch, setIsFirstLanch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLanch(true);
      } else {
        setIsFirstLanch(false);
      }
    });
  }, []);
  if (isFirstLanch == null) {
    return null;
  } else if (isFirstLanch == false) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onbording" component={OnbordingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  }
};

export default App;
