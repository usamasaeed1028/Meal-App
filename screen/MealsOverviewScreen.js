import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
import {MEALS} from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
    
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem)=> {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (mealItem) => {
        return <MealItem title={mealItem.item.title} />
  }

  return (
    <View style={styles.constainer}>
        <FlatList  data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderMealItem}/>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 16,
  },
});
