import{ NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from './Login';
import Cadastro from './Cadastro';
import Usuario from './Usuario';

import { UtilsContext } from "./Contex";
import { useState } from "react";

export default function App() {

  const [utils, setUtils] = useState({});

  const Stack = createStackNavigator()

  return(
  <NavigationContainer>
    <UtilsContext.Provider value={{ utils, setUtils }}>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component = {Cadastro} />
        <Stack.Screen name="Usuario" component = {Usuario} />
        <Stack.Screen name="Login" component = {Login} />
      </Stack.Navigator>
    </UtilsContext.Provider>
</NavigationContainer>

);
}