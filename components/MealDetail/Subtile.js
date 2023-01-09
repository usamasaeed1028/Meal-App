import { StyleSheet, View, Text } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};
export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
});
