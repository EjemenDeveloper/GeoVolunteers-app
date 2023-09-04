/*global spyOn*/
import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react-native";

import LoginScreen from "../login.screen";

//create access
//should show error when invalid email is used
//error warnin should disappear
describe("Login screen", () => {
  it("should go to home page on login ", () => {
    const navigation = { navigate: () => {} };

    const spy = jest.spyOn(navigation, "navigate");

    const page = render(<LoginScreen navigation={navigation} />);
    const loginButton = page.getByTestId("loginButton");

    fireEvent.press(loginButton);

    expect(spy).toHaveBeenCalledWith("Home");
  });
});
