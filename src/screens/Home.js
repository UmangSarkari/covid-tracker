import React from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import colors from "../style/colors";
import CustomHeader from "../components/CustomHeader";
import { baseUrl } from "../config";

const { width: windowWidth } = Dimensions.get("window");

export default class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, data: [], error: void 0, refreshing: false };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async refreshing => {
    try {
      this.setState({ loading: !refreshing, error: void 0, refreshing: !!refreshing }); // If called from pull to refresh, then dont show normal loader
      const response = await axios(baseUrl);
      let data = [];
      if (response && response.data) {
        data = response.data;
      }
      this.setState({ data, loading: false, refreshing: false });
    } catch (err) {
      this.setState({ error: err, loading: false, refreshing: false });
    }
  };

  refreshData = () => this.fetchData(true);

  renderItem = ({ index, item }) => {
    let { navigation } = this.props;
    let { data } = this.state;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate("CountryDetail", { country: item.country, detail: data[index] });
        }}
      >
        <Text numberOfLines={2} style={styles.country}>
          {item.country}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    let { data, loading, error, refreshing } = this.state;

    const errorComponent = <Text>Something went wrong</Text>;
    const noDataComponent = <Text>No data</Text>;

    return (
      <>
        <CustomHeader title={"Home"} navigation={this.props.navigation} />
        <View style={styles.container}>
          {loading && <ActivityIndicator size="large" color={"blue"} />}
          {error ? (
            errorComponent
          ) : data.length ? (
            <FlatList
              data={data}
              keyExtractor={(item, index) => "id_" + index}
              refreshing={refreshing}
              onRefresh={this.refreshData}
              renderItem={this.renderItem}
            />
          ) : (
            !loading && noDataComponent
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgColor,
    paddingTop: 6
  },
  itemContainer: {
    width: windowWidth - 20,
    marginHorizontal: 10,
    marginVertical: 6,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    elevation: 3,
    padding: 6
  },
  country: { fontSize: 18, textTransform: "capitalize" }
});
