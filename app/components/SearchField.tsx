import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const SearchField: React.FC = () => {
  const [text, setText] = useState("");
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const onChangeHandler = (value: string) => {
    setText(value);
  };

  const onCloseHandler = () => {
    setText("");
  };

  useEffect(() => {
    if (text === "") {
      setShowCloseIcon(false);
    } else {
      setShowCloseIcon(true);
    }
  }, [text]);

  return (
    <View style={styles.inputContainer}>
      <Ionicons name="search" size={theme.spacing.m} testID="search" />
      <TextInput
        style={styles.inputStyle}
        value={text}
        onChangeText={onChangeHandler}
        placeholder="Search"
        testID="textInput"
      />

      {showCloseIcon ? (
        <Pressable onPress={onCloseHandler}>
          <Ionicons name="close" size={theme.spacing.m} testID="close" />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.greyBackground,
    borderRadius: 50,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: 2,
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: theme.spacing.s,
    fontSize: theme.fontSize.s,
  },
});

export default SearchField;
