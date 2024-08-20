import { useState } from "react";
import { validateField, validateZipCode } from "../utils/validators";
import { TextFieldType } from "../utils/enums";

const useAddAddressController = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [street, setStreet] = useState<string | undefined>();
  const [streetErrorText, setStreetErrorText] = useState<string | null>();
  const [city, setCity] = useState<string | undefined>();
  const [cityErrorText, setCityErrorText] = useState<string | null>();
  const [state, setState] = useState<string | undefined>();
  const [stateErrorText, setStateErrorText] = useState<string | null>();
  const [zipCode, setZipCode] = useState<string | undefined>();
  const [zipCodeErrorText, setZipCodeErrorText] = useState<string | null>();

  type TextFieldType = (typeof TextFieldType)[keyof typeof TextFieldType];

  const onChangeText = (value: string, type: TextFieldType) => {
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
  };

  const onSave = () => {};

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
};

export default useAddAddressController;
