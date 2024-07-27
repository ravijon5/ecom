jest.mock("@expo/vector-icons", () => ({
  Ionicons: "",
}));

import { fireEvent, render, screen } from "@testing-library/react-native";
import SearchField from "../../../app/components/SearchField";

describe("testing searchfield", () => {
  it("renders correctly", () => {
    render(<SearchField />);

    expect(screen.getByPlaceholderText("Search")).toBeTruthy();
    expect(screen.getByTestId("search")).toBeTruthy();
    expect(screen.queryByTestId("close")).toBeNull();
  });

  it("test onChange Handler", () => {
    render(<SearchField />);
    const inputField = screen.getByTestId("textInput");
    fireEvent.changeText(inputField, "Hello");
    expect(screen.getByTestId("search")).toBeTruthy();
    expect(inputField.props.value).toEqual("Hello");
    expect(screen.queryByTestId("close")).toBeTruthy();
  });

  it("test close button to clear text", () => {
    render(<SearchField />);
    const inputField = screen.getByTestId("textInput");
    fireEvent.changeText(inputField, "Hello");
    const closeIcon = screen.getByTestId("close");
    fireEvent.press(closeIcon);
    expect(screen.getByTestId("search")).toBeTruthy();
    expect(inputField.props.value).toEqual("");
    expect(screen.queryByTestId("close")).toBeNull();
  });
});
