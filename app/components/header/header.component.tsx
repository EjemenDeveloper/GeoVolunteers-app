import React, { useState } from "react";
import { Appbar, Menu } from "react-native-paper";
import { headerStyle } from "./header.style";

interface HeaderComponentParams {
  hasBackButton?: boolean;
  navigation?: any;
  title: string;
}

export const HeaderComponent = (props: HeaderComponentParams) => {
  const [visible, setVisible] = useState(false);

  const goBack = () => props.navigation?.goBack();
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const goToMyCases = () => {
    props.navigation?.navigate("IncidentCases");
    closeMenu();
  };

  const logout = () => {
    props.navigation?.navigate("Login");
    closeMenu();
  };

  return (
    <Appbar>
      {props.hasBackButton ? (
        <Appbar.BackAction onPress={goBack} />
      ) : (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="menu"
              color={headerStyle.menu.color}
              onPress={openMenu}
            />
          }
        >
          <Menu.Item title=" About GeoVolunteers App" onPress={goToMyCases} />
          <Menu.Item title=" User dashboard" onPress={goToMyCases} />

          <Menu.Item title=" My Profile" onPress={goToMyCases} />
          <Menu.Item title=" Map Integration" onPress={goToMyCases} />
          <Menu.Item
            title=" Nearby Volunteer opportunities"
            onPress={goToMyCases}
          />

          <Menu.Item title=" Account Settings" onPress={goToMyCases} />
          <Menu.Item title=" Report an Emergency" onPress={goToMyCases} />
          <Menu.Item title=" Feedback" onPress={goToMyCases} />
          <Menu.Item title=" My Reported Cases" onPress={goToMyCases} />

          <Menu.Item title=" Admin" onPress={goToMyCases} />

          <Menu.Item title=" Logout" onPress={logout} />
        </Menu>
      )}
      <Appbar.Content title={props.title} />
    </Appbar>
  );
};
