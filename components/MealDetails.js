import { StyleSheet, View, Text } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsText}>{duration}m</Text>
      <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsText: {
    fontSize: 14,
    marginHorizontal: 8,
  },
});
