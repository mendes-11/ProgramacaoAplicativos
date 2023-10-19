import{ NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Login';
import Cadastro from './Cadastro';
import Usuario from './Usuario';

export default function App() {
  const Stack = createStackNavigator()

  return(
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Cadastro" component = {Cadastro} />
    <Stack.Screen name="Login" component = {Login} />
    <Stack.Screen name="Usuario" component = {Usuario} />
  </Stack.Navigator>
</NavigationContainer>

);
}