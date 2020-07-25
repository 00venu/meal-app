import React, { useState, useEffect, useCallback } from "react";

import { View, Text, Switch, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { filterSettings } from "../store/action";

const FilterSwitch = (props) => {
  return (
    <View style={styles.switchParent}>
      <Text>{props.title}</Text>
      <Switch
        value={props.isGlutenFree}
        trackColor={{ true: "#4a148c" }}
        thumbColor="#f1f1f1"
        onValueChange={props.change}
      />
    </View>
  );
};

const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const applyFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan,
    };
    dispatch(filterSettings(applyFilters));
  }, [
    isGlutenFree,
    isLactoseFree,
    isVegetarian,
    isVegan,
    dispatch,
    filterSettings,
  ]);
  useEffect(() => {
    props.navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);
  return (
    <View style={{ padding: 10 }}>
      <FilterSwitch
        title="isGlutenFree"
        isGlutenFree={isGlutenFree}
        change={(value) => setIsGlutenFree(value)}
      />
      <FilterSwitch
        title="isLactoseFree"
        isGlutenFree={isLactoseFree}
        change={(value) => setIsLactoseFree(value)}
      />
      <FilterSwitch
        title="isVegetarian"
        isGlutenFree={isVegetarian}
        change={(value) => setIsVegetarian(value)}
      />
      <FilterSwitch
        title="isVegan"
        isGlutenFree={isVegan}
        change={(value) => setIsVegan(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingLeft: 15,
  },
  trackColor: {
    backgroundColor: "red",
  },
});
FilterScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

export default FilterScreen;
