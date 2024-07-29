import { FAB } from "react-native-paper";

function FloatingActionButton() {
  return (
    <View style={styles.container}>
      <FAB style={styles.fab} icon="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FloatingActionButton;
