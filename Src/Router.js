import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './../Src/Pages/Auth/Login'
import Register from './../Src/Pages/Auth/Register'
import Home from './../Src/Pages/Home'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator 
     screenOptions={{
      headerShown:false,
      tabBarHideOnKeyboard: true,
     }}>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
