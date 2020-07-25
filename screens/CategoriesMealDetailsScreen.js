import React, { useEffect, useCallback } from "react";

import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../store/action";

const CategoriesMealDetailsScreen = (props) => {
  let itemId = props.navigation.getParam("itemId");
  const mealsData = useSelector((state) => state.meals.meals);
  const getMealItem = mealsData.find((meal) => meal.id === itemId);
  const dispatch = useDispatch();

  const isFav = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === itemId)
  );

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFav(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    props.navigation.setParams({
      favHandler: toggleFavHandler,
    });
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({
      isFav: isFav,
    });
  }, [isFav]);

  return (
    <View>
      <Text>{getMealItem.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

CategoriesMealDetailsScreen.navigationOptions = (navigationData) => {
  let itemId = navigationData.navigation.getParam("itemId");
  //const mealsData = useSelector((state) => state.meals.filterMeals);
  const mealTitile = navigationData.navigation.getParam("mealTitile");
  // const getMealItem = MEALS.find((meal) => meal.id === itemId);
  const favHandler = navigationData.navigation.getParam("favHandler");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: mealTitile,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName={isFav ? "md-star" : "md-star-outline"}
          onPress={favHandler}
        />
      </HeaderButtons>
    ),
  };
};

export default CategoriesMealDetailsScreen;
