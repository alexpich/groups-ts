import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import DiscoverScreen from "../screens/DiscoverScreen";
import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";
import MyGroupsScreen from "../screens/MyGroupsScreen";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? Colors.white : Colors.primary,
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const DiscoverNavigator = createStackNavigator(
  {
    Discover: DiscoverScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MyGroupsNavigator = createStackNavigator(
  {
    MyGroups: MyGroupsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MessagesNavigator = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: { tintColor: string | undefined }) => {
        return <Ionicons name="ios-home" size={24} color={tabInfo.tintColor} />;
      },
    },
  },
  Discover: {
    screen: DiscoverNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: { tintColor: string | undefined }) => {
        return (
          <Ionicons name="ios-search" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Messages: {
    screen: MessagesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: { tintColor: string | undefined }) => {
        return (
          <Ionicons
            name="ios-chatbubbles"
            size={24}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  MyGroups: {
    screen: MyGroupsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo: { tintColor: string | undefined }) => {
        return (
          <Ionicons name="ios-people" size={24} color={tabInfo.tintColor} />
        );
      },
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.white,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });

export default createAppContainer(TabNavigator);
