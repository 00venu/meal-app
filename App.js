import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealNavigator from "./navigation/MealNavigator";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducer from "./store/reducer";

const rootReducer = combineReducers({
  meals: mealReducer,
});

const store = createStore(rootReducer);

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "popins-medium": require("./assets/fonts/poppins-medium-webfont.ttf"),
    "popins-semibold": require("./assets/fonts/poppins-semibold-webfont.ttf"),
  });
};

export default function App() {
  const [fonstload, setFontLoad] = useState(false);
  if (!fonstload) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoad(true)} />
    );
  }
  return (
    <Provider store={store}>
      <MealNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
