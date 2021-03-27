import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import colors from "../style/colors";

const DetailItem = ({ detailKey, value }) => {
  return (
    <Text style={styles.text}>
      {detailKey} - {value || "NA"}
    </Text>
  );
};

const Detail = props => {
  let { route: { params: { detail = {} } = {} } = {}, navigation } = props;

  return (
    <>
      <CustomHeader
        title={"Country Detail"}
        icon="arrow-back"
        navigation={navigation}
        onClick={() => navigation.goBack && navigation.goBack()}
      />
      <View style={styles.container}>
        <DetailItem detailKey={"Total Cases"} value={detail.cases} />
        <DetailItem detailKey={"Cases Today"} value={detail.todayCases} />
        <DetailItem detailKey={"Deaths"} value={detail.deaths} />
        <DetailItem detailKey={"Today Deaths"} value={detail.todayDeaths} />
        <DetailItem detailKey={"Recovered"} value={detail.recovered} />
        <DetailItem detailKey={"Active"} value={detail.active} />
        <DetailItem detailKey={"Critical"} value={detail.critical} />
        <DetailItem detailKey={"Cases Per One Million"} value={detail.casesPerOneMillion} />
        <DetailItem detailKey={"Deaths Per One Million"} value={detail.deathsPerOneMillion} />
        <DetailItem detailKey={"Total Tests"} value={detail.totalTests} />
        <DetailItem detailKey={"Tests Per One Million"} value={detail.testsPerOneMillion} />
      </View>
    </>
  );
};
export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 16
  },
  text: {
    fontSize: 20
  }
});
