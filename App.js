import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screen/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailsScreen from "./screen/MealDetailsScreen";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const drawerNavigator = () => {
//   <Drawer.Navigator>
//     <Drawer.Screen name="Categories" component={CategoryScreen} />
//   </Drawer.Navigator>
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoryScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
