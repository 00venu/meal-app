import React from "react";
import { Platform, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoriesMealScreen from "./../screens/CategoriesMealScreen";
import CategoriesMealDetailsScreen from "./../screens/CategoriesMealDetailsScreen";
import FavouriteScreen from "./../screens/FavouriteScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FilterScreen from "../screens/FilterScreen";

const iconColor = {
  color: "orange",
};

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Categories",
      },
    },
    CategoriesMeal: {
      screen: CategoriesMealScreen,
    },
    MealDetails: CategoriesMealDetailsScreen,
  },
  {
    initialRouteName: "Categories",
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "popins-semibold",
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "#fff",
    },
  }
);
const favNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouriteScreen,
      navigationOptions: {
        headerTitle: "My Favourites",
      },
    },
    MealDetails: CategoriesMealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "popins-semibold",
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "#fff",
    },
  }
);

const tabConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{ fontFamily: "popins-medium", fontSize: 14 }}>MEALS</Text>
      ),
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: "#512DA8",
    },
  },
  Favourites: {
    screen: favNavigator,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{ fontFamily: "popins-medium", fontSize: 14 }}>
          FAVOURITES
        </Text>
      ),
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: "#9C27B0",
    },
  },
};

const MealsBottomNavigator =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: iconColor.color,
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: iconColor.color,
        },
      });

const filterNavigator = createStackNavigator(
  {
    Filter: {
      screen: FilterScreen,
      navigationOptions: {
        headerTitle: "Filter Meals",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontFamily: "popins-semibold",
        fontSize: 18,
      },
      headerStyle: {
        backgroundColor: "#4a148c",
      },
      headerTintColor: "#fff",
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Meals: MealsBottomNavigator,
    Filters: filterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: iconColor.color,
      labelStyle: {
        fontFamily: "popins-medium",
        fontSize: 14,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
