import React, { useCallback } from "react";
import { View, StyleSheet, Text, Keyboard } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const CustomHeader = ({ title, navigation, onClick, icon }) => {
  const onMenuClick = useCallback(() => {
    navigation.toggleDrawer && navigation.toggleDrawer();
    Keyboard.dismiss();
  }, []);

  return (
    <View style={styles.container}>
      <Icon name={icon || "menu"} size={25} onPress={onClick || onMenuClick} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
