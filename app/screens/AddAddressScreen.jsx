import { View, Text, StyleSheet } from "react-native";
import { theme } from "../utils/theme";
import RoundedTextButton from "../components/RoundedTextButton";
import useAddAddressController from "../controllers/AddAddressController";
import { TextFieldType } from "../utils/enums";
import TextField from "../components/TextField";
import { useLayoutEffect } from "react";

function AddAddressScreen({ route }) {
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

  function handleStreet(value) {
    onChangeText(value, TextFieldType.STREET);
  }

  function handleCity(value) {
    onChangeText(value, TextFieldType.CITY);
  }

  function handleState(value) {
    onChangeText(value, TextFieldType.STATE);
  }

  function handleZipCode(value) {
    onChangeText(value, TextFieldType.ZIP_CODE);
  }

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
        text="Save"
        style={[
          styles.buttonStyle,
          isFormValid ? null : { backgroundColor: theme.colors.primaryLight },
        ]}
        isDisabled={!isFormValid}
      />
    </View>
  );
}

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
