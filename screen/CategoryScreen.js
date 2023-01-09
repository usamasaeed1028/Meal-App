import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoryScreen = ({navigation}) => {
    const pressHandler = (dataItem) => {
        navigation.navigate('MealsOverview',{
            categoryId: dataItem.item.id
        });
    };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={(item) => (
          <CategoryGridTile title={item.item.title} color={item.item.color} onPress={() => pressHandler(item)} />
        )}
        keyExtractor={(item) => item.id}
        numColumns="2"
      />
    </View>
  );
};

export default CategoryScreen;
