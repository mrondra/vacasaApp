import {BottomNavigation} from 'react-native-paper';
import {CommonActions, NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen.tsx';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SettingsScreen} from '../screens/SettingsScreen.tsx';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({navigation, state, descriptors, insets}) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({route, preventDefault}) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({route, focused, color}) => {
              const {options} = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({focused, color, size: 24});
              }

              return null;
            }}
            getLabelText={({route}) => {
              const {
                options: {tabBarLabel, title},
              } = descriptors[route.key];
              const label: string =
                typeof tabBarLabel === 'string' && tabBarLabel !== undefined
                  ? tabBarLabel
                  : title !== undefined
                  ? title
                  : '';

              return label;
            }}
          />
        )}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => {
              return <Icon name="home" size={size} color={color} />;
            },
            headerShown: true,
            title: 'Repositories',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color, size}) => {
              return <Icon name="cog" size={size} color={color} />;
            },
            headerShown: true,
            title: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
