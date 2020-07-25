export const TOGGLE_FAV = "TOGGLE_FAV";

export const FILTER_SETTINGS = "FILTER_SETTINGS";

export const toggleFav = (id) => {
  return {
    type: TOGGLE_FAV,
    mealId: id,
  };
};

export const filterSettings = (filterSets) => {
  return {
    type: FILTER_SETTINGS,
    filterSet: filterSets,
  };
};
