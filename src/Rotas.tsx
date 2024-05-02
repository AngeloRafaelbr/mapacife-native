import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from "./BottomTabs/Perfil";
import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './BottomTabs';
import Bemvindo from './Bemvindo';

const Stack = createNativeStackNavigator();

export default function Rotas(){
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name='BemVindo' component={Bemvindo} options={{headerShown: false}}/>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>  
                <Stack.Screen name='Cadastro' component={Cadastro} options={{headerShown: false}}/>
                <Stack.Screen name='Tabs' component={Tabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}