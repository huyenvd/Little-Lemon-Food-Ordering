import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Routes } from './Routes';
// import { Constance } from '../utils/Constance';
import { MenuCategories } from '../utils/EnumTypes';

import Home from '../../screens/Home/Home';
import Onboarding from '../../screens/Onboarding/Onboarding';
import Profile from '../../screens/Profile/Profile';

import FoodMenuTabTitle from '../components/FoodMenuTabTitle/FoodMenuTabTitle';
import FoodMenuTabContent from '../components/FoodMenuTabContent/FoodMenuTabContent';
import { getUserData } from '../database/asyncstore/UserStorage';
import ActivityIndicatorView from '../components/ActivityIndicatorView/ActivityIndicatorView';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

export const FoodMenuTabsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderBottomColor: '#E5E5E5',
                    borderBottomWidth: 1,
                    paddingBottom: 12,
                },
            }}>
            <Tab.Screen
                name={MenuCategories.STARTERS}
                component={FoodMenuTabContent}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <FoodMenuTabTitle title={MenuCategories.STARTERS} isFocused={focused} />
                    ),
                }}
                initialParams={{ category: MenuCategories.STARTERS }}
            />

            <Tab.Screen
                name={MenuCategories.MAINS}
                component={FoodMenuTabContent}
                options={{
                    tabBarLabel: ({ focused }) => (
                    <FoodMenuTabTitle title={MenuCategories.MAINS} isFocused={focused} />
                    ),
                }}
                initialParams={{ category: MenuCategories.MAINS }}
            />

            <Tab.Screen
                name={MenuCategories.DESSERTS}
                component={FoodMenuTabContent}
                options={{
                    tabBarLabel: ({ focused }) => (
                    <FoodMenuTabTitle title={MenuCategories.DESSERTS} isFocused={focused} />
                    ),
                }}
                initialParams={{ category: MenuCategories.DESSERTS }}
            />

            <Tab.Screen
                name={MenuCategories.DRINKS}
                component={FoodMenuTabContent}
                options={{
                    tabBarLabel: ({ focused }) => (
                    <FoodMenuTabTitle title={MenuCategories.DRINKS} isFocused={focused} />
                    ),
                }}
                initialParams={{ category: MenuCategories.DRINKS }}
            />
        </Tab.Navigator>
    );
};

export const NavigationStack = () => {
    const [initialRoute, setInitialRoute] = useState<string | null>(null);

    useEffect(() => {
        const checkLoggedIn = async () => {
            try {
                const userData = await getUserData();
                setInitialRoute(userData.loggedIn ? Routes.Home : Routes.Onboarding);
            } catch (e) {
                console.error('Failed to load user data', e);
                setInitialRoute(Routes.Onboarding);
            };
        };

        checkLoggedIn();
    }, []);

    if (!initialRoute) {
        return (
            <ActivityIndicatorView />
        );
    }
    
    return (
        <Stack.Navigator
            screenOptions={{header: () => null, headerShown: false}}
            initialRouteName={initialRoute}
        >
            <Stack.Screen name={Routes.Onboarding} component={Onboarding} />
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile}  />
        </Stack.Navigator>
    );
};