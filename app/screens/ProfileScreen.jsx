import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import ProfileOption from "../components/ProfileOption";
import { theme } from "../utils/theme";
import { useContext } from "react";
import { UserContext } from "../store/user-context";
import { ADDRESS, FAVORITES } from "../utils/route_constants";
import { USERS } from "../utils/users";

function ProfileScreen({ navigation }) {
  // const { user, removeUser } = useContext(UserContext);

  const { removeUser } = useContext(UserContext);

  const user = USERS[0];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.imageContainer}
      />

      <View style={styles.detailContainer}>
        <Text style={styles.nameTextStyle}>{user.name}</Text>
        <Text style={styles.detailTextStyle}>{user.email}</Text>
        <Text style={styles.detailTextStyle}>{user.phone}</Text>
      </View>
      <ProfileOption
        text="Address"
        onPress={() => {
          navigation.navigate(ADDRESS);
        }}
      />
      <ProfileOption
        text="Wishlist"
        onPress={() => {
          navigation.navigate(FAVORITES);
        }}
      />
      <ProfileOption text="Payment" />
      <ProfileOption text="Help" />
      <ProfileOption text="Support" />
      <Pressable onPress={removeUser}>
        <Text style={styles.signOutTextStyle}>Sign Out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: theme.spacing.m,
    justifyContent: "center",
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: theme.spacing.m,
  },
  detailContainer: {
    backgroundColor: theme.colors.greyBackground,
    padding: theme.spacing.s,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
  nameTextStyle: {
    fontWeight: "bold",
  },
  detailTextStyle: {
    color: theme.colors.greyText,
  },
  signOutTextStyle: {
    fontWeight: "bold",
    color: "red",
    alignSelf: "center",
  },
});

export default ProfileScreen;
