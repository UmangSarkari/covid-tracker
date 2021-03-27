import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import colors from "../style/colors";

const ContactUs = ({ navigation }) => {
  return (
    <>
      <CustomHeader title={"Contact Us"} navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.text}>This is Contact Us Screen</Text>
      </View>
    </>
  );
};
export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgColor
  },
  text: {
    fontSize: 20
  }
});
