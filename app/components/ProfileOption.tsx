import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { theme } from "../utils/theme";

interface ProfileOptionProps {
  text: string;
  onPress?: () => void;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({ text, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>{text}</Text>
      <Ionicons name="chevron-forward" size={20} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.s,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.greyBackground,
    borderRadius: theme.spacing.s,
    marginBottom: theme.spacing.m,
  },
});

export default ProfileOption;
