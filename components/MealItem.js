import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
  } = props.itemData;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onSelected}>
        <View>
          <View style={styles.titleContainer}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.bgImage}>
              <Text style={styles.title}>{title}</Text>
            </ImageBackground>
          </View>
          <View style={styles.extraInfo}>
            <Text style={styles.fInfo}>{duration}</Text>
            <Text style={styles.fInfo}>{complexity}</Text>
            <Text style={styles.fInfo}>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    height: 200,
    backgroundColor: "#ccc",
    marginBottom: 15,
    paddingBottom: 5,
  },
  titleContainer: {
    height: "88%",
    overflow: "hidden",
  },
  extraInfo: {
    height: "12%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  fInfo: {
    fontFamily: "popins-medium",
    fontSize: 12,
    textTransform: "uppercase",
    paddingTop: 5,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  title: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    padding: 8,
    textAlign: "right",
    fontFamily: "popins-medium",
    fontSize: 14,
    paddingRight: 10,
  },
});

export default MealItem;
