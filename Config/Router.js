import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BaseNavigationContainer, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/screens/SplashScreen';
import Login from '../src/screens/Login';
import Signup from '../src/screens/Signup';
import Home from '../src/screens/Home';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="SignupScreen" component={Signup} />
                <Stack.Screen name="Home" component={Home} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({

})



export default Router;