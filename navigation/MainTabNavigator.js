import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import CategoriesScreen from '../screens/CategoriesScreen.js';
import Page1Screen from '../screens/Page1';
import Page2Screen from '../screens/Page2';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Page1: Page1Screen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ProductStack = createStackNavigator({
  Products: ProductsScreen,
});

ProductStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const CategoryStack = createStackNavigator({
  Categories: CategoriesScreen,
  Page2: Page2Screen,
});

CategoryStack.navigationOptions = {
  tabBarLabel: 'Categories',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProductStack,
  CategoryStack,
});
