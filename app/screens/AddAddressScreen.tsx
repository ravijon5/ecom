import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import RoundedTextButton from "../components/RoundedTextButton";
import useAddAddressController from "../controllers/AddAddressController";
import { TextFieldType } from "../utils/enums";
import TextField from "../components/TextField";
import { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { HomeStackRouteProp } from "../utils/route_types";
import { Routes } from "../utils/route_constants";

const AddAddressScreen: React.FC = () => {
  const route = useRoute<HomeStackRouteProp<typeof Routes.ADD_ADDRESS>>();

  const routeParams = route.params;
  const {
    street,
    city,
    state,
    zipCode,
    streetErrorText,
    cityErrorText,
    stateErrorText,
    zipCodeErrorText,
    onChangeText,
  } = useAddAddressController();

  const isFormValid =
    streetErrorText === null &&
    cityErrorText === null &&
    stateErrorText === null &&
    zipCodeErrorText === null;

  useLayoutEffect(() => {
    if (routeParams && routeParams.item) {
      const address = routeParams.item;
      handleStreet(address.street);
      handleCity(address.city);
      handleState(address.state);
      handleZipCode(address.zipCode);
    }
  }, []);

  const handleStreet = (value: string) => {
    onChangeText(value, TextFieldType.STREET);
  };

  const handleCity = (value: string) => {
    onChangeText(value, TextFieldType.CITY);
  };

  const handleState = (value: string) => {
    onChangeText(value, TextFieldType.STATE);
  };

  const handleZipCode = (value: string) => {
    onChangeText(value, TextFieldType.ZIP_CODE);
  };

  return (
    <View style={styles.container}>
      <TextField
        placeholder="Street Address"
        value={street}
        error={streetErrorText}
        onChangeText={handleStreet}
      />
      <TextField
        placeholder="City"
        value={city}
        error={cityErrorText}
        onChangeText={handleCity}
      />
      <View style={styles.rowContainer}>
        <View style={{ flex: 1 }}>
          <TextField
            placeholder="State"
            value={state}
            error={stateErrorText}
            onChangeText={handleState}
          />
        </View>
        <View style={styles.space}></View>
        <View style={{ flex: 1 }}>
          <TextField
            placeholder="Zip Code"
            value={zipCode}
            error={zipCodeErrorText}
            onChangeText={handleZipCode}
            maxLength={6}
          />
        </View>
      </View>
      <RoundedTextButton
        onPress={() => {}}
        text="Save"
        style={[
          styles.buttonStyle,
          isFormValid ? null : { backgroundColor: theme.colors.primaryLight },
        ]}
        isDisabled={!isFormValid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.m,
  },
  rowContainer: {
    flexDirection: "row",
  },
  space: {
    width: theme.spacing.m,
  },
  buttonStyle: {
    position: "absolute",
    bottom: theme.spacing.m,
    left: 0,
    right: 0,
    marginHorizontal: theme.spacing.m,
  },
});

export default AddAddressScreen;
