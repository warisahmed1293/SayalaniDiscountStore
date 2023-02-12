import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BaseNavigationContainer, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../src/screens/SplashScreen';
import Login from '../src/screens/Login';
import Signup from '../src/screens/Signup';
import Home from '../src/screens/Home';
import AdminHome from '../src/screens/AdminHome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="MyTabs" component={MyTabs} />
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="SignupScreen" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AdminHome" component={AdminHome} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
    return (

        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            headerShown: true,
            tabBarStyle: {
                ...styles.shadow
            }
        }}>
            <Tab.Screen name="AdminHome" component={AdminHome} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='home' size={20} /> : <Ionicons name='home-outline' size={20} />}
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}




const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 8

    }
})



export default Router;