import { View, Text, StyleSheet } from "react-native";
import BackButton from "./BackButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../utils/theme";
import { ALL_CATEGORIES } from "../utils/route_constants";
import { SearchBar } from "react-native-screens";
import SearchField from "./SearchField";

function AppBar({ onPress, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={onPress} />
      {route.name === ALL_CATEGORIES ? (
        <View style={styles.searchContainer}>
          <SearchField />
        </View>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: theme.spacing.m,
    backgroundColor: "white",
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.m,
  },
});

export default AppBar;
