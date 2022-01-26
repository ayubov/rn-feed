import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Feed, Post } from 'screens';
import { Routes, RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.feed} component={Feed} options={{ title: 'Top 250' }} />
        <Stack.Screen
          name={Routes.post}
          component={Post}
          options={({
            route: {
              params: { title },
            },
          }) => ({
            title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
