import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigator from "./StackNavigator";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator>
      <Screen name="Home" component={StackNavigator} />
      <Screen name="About" component={About} />
      <Screen name="Contact Us" component={ContactUs} />
    </Navigator>
  );
};

export default DrawerNavigator;
