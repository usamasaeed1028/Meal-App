import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoryScreen} options={{title: 'All Categories'}} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
