import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {
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
  const mealData = useSelector((state) => state.meals.favouriteMeals);
  // const mealSet = mealData.filter(
  //   (meal) => meal.id === "m1" || meal.id === "m2"
  // );

  if (mealData.length === 0 || !mealData) {
    return (
      <View style={styles.defaultTxt}>
        <Text>No fav meals please add some!</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={mealData}
        renderItem={renderMealItem}
        style={styles.itemList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemList: {
    width: "100%",
    padding: 15,
  },
  defaultTxt:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  }
});

FavouriteScreen.navigationOptions = (navData) => {
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
  };
};

export default FavouriteScreen;
