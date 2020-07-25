import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { CATEGORY } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const CategoriesScreen = (props) => {
  const rendersList = (itemData) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoriesMeal",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
        style={styles.gridItem}
        activeOpacity={0.7}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: itemData.item.color },
          }}
        >
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={CATEGORY} numColumns={2} renderItem={rendersList} />
    </View>
  );
};
CategoriesScreen.navigationOptions = (navData) => {
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
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "stretch",
    margin: 10,
    height: 100,
  },
  container: {
    flex: 1,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  title: {
    color: "#333",
    fontFamily: "popins-medium",
    fontSize: 16,
  },
});

export default CategoriesScreen;
