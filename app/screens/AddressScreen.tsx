import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextStyle,
} from "react-native";
import { FAB } from "react-native-paper";
import { Routes } from "../utils/route_constants";
import { theme } from "../utils/theme";
import { USERS } from "../utils/users";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationProps } from "../utils/route_types";

const AddressScreen: React.FC = () => {
  const navigation =
    useNavigation<HomeStackNavigationProps<typeof Routes.ADD_ADDRESS>>();

  const onPress = () => {
    navigation.navigate(Routes.ADD_ADDRESS, {});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={USERS[0].address}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.outerAddressContainer}>
              <View style={styles.textContainer}>
                <Text ellipsizeMode="tail" numberOfLines={1}>
                  {item.street}, {item.city}, {item.state},{item.zipCode}
                </Text>
              </View>

              <Pressable
                onPress={() =>
                  navigation.navigate(Routes.ADD_ADDRESS, { item: item })
                }
              >
                <Text style={styles.editText}>Edit</Text>
              </Pressable>
            </View>
          );
        }}
      />
      <FAB style={styles.fab} icon="plus" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.m,
  },
  outerAddressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    paddingVertical: theme.spacing.m,
  },
  textContainer: {
    flex: 1,
    marginRight: theme.spacing.s,
  },
  editText: {
    fontSize: theme.fontSize.s,
    color: theme.colors.primary,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddressScreen;
