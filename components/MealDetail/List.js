import { StyleSheet, Text, View } from "react-native";
const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
  },
  itemText: {
    backgroundColor: "#351401",
    textAlign: "center",
    color: "white",
    padding: 8,
    borderRadius: 8,
  },
});
