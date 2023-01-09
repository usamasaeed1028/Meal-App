import { Pressable, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderWidth: 2,
    borderRadius: 8,
    elevation: 4,
    overflow: "hidden",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
