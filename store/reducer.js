import { MEALS } from "../data/dummy-data";
import { TOGGLE_FAV, FILTER_SETTINGS } from "./action";

const initialState = {
  meals: MEALS,
  filterMeals: MEALS,
  favouriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const mealIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (mealIndex >= 0) {
        const updatedMeal = [...state.favouriteMeals];
        updatedMeal.splice(mealIndex, 1);
        return {
          ...state,
          favouriteMeals: updatedMeal,
        };
      } else {
        const addMeal = state.meals.find((meal) => meal.id === action.mealId);
        return {
          ...state,
          favouriteMeals: state.favouriteMeals.concat(addMeal),
        };
      }
    case FILTER_SETTINGS:
      const filterSettings = action.filterSet;
      const updatedFilter = state.meals.filter((meal) => {
        if (filterSettings.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (filterSettings.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (filterSettings.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (filterSettings.vegan && !meal.vegan) {
          return false;
        }
        return true;
      });

      return {
        ...state,
        filterMeals: updatedFilter,
      };

    default:
      return state;
  }
};

export default mealReducer;
