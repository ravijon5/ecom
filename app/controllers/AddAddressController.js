import { useState } from "react";
import { validateField, validateZipCode } from "../utils/validators";
import { TextFieldType } from "../utils/enums";

function useAddAddressController() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [street, setStreet] = useState();
  const [streetErrorText, setStreetErrorText] = useState();
  const [city, setCity] = useState();
  const [cityErrorText, setCityErrorText] = useState();
  const [state, setState] = useState();
  const [stateErrorText, setStateErrorText] = useState();
  const [zipCode, setZipCode] = useState();
  const [zipCodeErrorText, setZipCodeErrorText] = useState();

  function onChangeText(value, type) {
    if (type === TextFieldType.STREET) {
      setStreet(value);
      setStreetErrorText(validateField(value));
    } else if (type === TextFieldType.CITY) {
      setCity(value);
      setCityErrorText(validateField(value));
    } else if (type === TextFieldType.STATE) {
      setState(value);
      setStateErrorText(validateField(value));
    } else {
      setZipCode(value);
      setZipCodeErrorText(validateZipCode(value));
    }
  }

  async function onSave() {}

  return {
    street,
    city,
    state,
    zipCode,
    streetErrorText,
    cityErrorText,
    stateErrorText,
    zipCodeErrorText,
    isLoading,
    error,
    onChangeText,
  };
}

export default useAddAddressController;
