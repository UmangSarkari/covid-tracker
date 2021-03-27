import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import CountryDetail from "../screens/CountryDetail";

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CountryDetail" component={CountryDetail} />
    </Navigator>
  );
};

export default StackNavigator;
