import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import Icon from "@builderx/icons";

export default class CupertinoSearchBarBasic extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.inputBox}>
          <Icon
            name={"search"}
            type={"FontAwesome"}
            style={styles.inputLeftIcon}
          />
          <TextInput placeholder={"Search"} style={styles.inputStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  inputBox: {
    flex: 1,
    backgroundColor: "#EFEFF4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100
  },
  inputLeftIcon: {
    color: "#000",
    fontSize: 20,
    alignSelf: "center",
    paddingLeft: 5,
    paddingRight: 5
  },
  inputStyle: {
    height: 32,
    flex: 1,
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 15,
    fontFamily: "roboto-regular",
    lineHeight: 15
  }
});
