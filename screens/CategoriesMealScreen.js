import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORY } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const CategoriesMealScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        itemData={itemData.item}
        onSelected={() => {
          props.navigation.navigate({
            routeName: "MealDetails",
            params: {
              itemId: itemData.item.id,
              mealTitile: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  let catId = props.navigation.getParam("categoryId");
  const mealsData = useSelector((state) => state.meals.filterMeals);
  const mealSet = mealsData.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  // console.log(mealSet);

  if (mealSet.length === 0) {
    return (
      <View style={styles.defaultTxt}>
        <Text>Meal is not found. Please check filters !</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={mealSet}
        renderItem={renderMealItem}
        style={styles.itemList}
      />
    </View>
  );
};
CategoriesMealScreen.navigationOptions = (navigationData) => {
  const itemId = navigationData.navigation.getParam("categoryId");
  const selectedObj = CATEGORY.find((item) => item.id === itemId);
  return {
    headerTitle: selectedObj.title,
  };
};

const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    padding: 15,
  },
  defaultTxt: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesMealScreen;
