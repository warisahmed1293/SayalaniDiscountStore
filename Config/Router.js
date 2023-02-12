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
import AddItem from '../src/screens/AddItem';
import AdminAccount from '../src/screens/AdminAccount';

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
                <Stack.Screen name="AdminTab" component={AdminTab} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
const Tab = createBottomTabNavigator();

function AdminTab() {
    return (

        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                top: -30,
                width: 300,
                height: 70,
                borderRadius: 60,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
            }
        }}>
            <Tab.Screen name="AdminHome" component={AdminHome} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='home' size={20} /> : <Ionicons name='home-outline' size={20} />}
                    </View>
                )
            }} />
            <Tab.Screen name="AddItem" component={AddItem} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='add-circle' size={25} /> : <Ionicons name='add' size={25} />}
                    </View>
                )
            }} />
            <Tab.Screen name="AdminAccount" component={AdminAccount} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        {focused ? <Ionicons name='person' size={20} /> : <Ionicons name='person-outline' size={20} />}
                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}




const styles = StyleSheet.create({
    // shadow: {
    //     shadowColor: 'black',
    //     shadowOffset: {
    //         width: 0,
    //         height: 10,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.5,
    //     elevation: 8

    // }
})



export default Router;