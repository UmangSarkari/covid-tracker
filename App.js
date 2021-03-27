import React from "react";
import { StatusBar, View } from "react-native";
import AppNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#f8f8f8" />
      <View style={{ height: StatusBar.currentHeight }} />
      <AppNavigator />
    </>
  );
};
export default App;
