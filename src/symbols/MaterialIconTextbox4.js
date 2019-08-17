import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import Icon from "@builderx/icons";

export default class MaterialIconTextbox4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          name={"eye"}
          type={"MaterialCommunityIcons"}
          style={styles.iconStyle}
        />
        <TextInput
          placeholder={"Password"}
          placeholderTextColor={"rgba(74,74,74,1)"}
          style={styles.inputStyle}
        />
        <Text style={styles.text}>SIGN IN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(230,230,230,1)",
    flexDirection: "row",
    alignItems: "center"
  },
  iconStyle: {
    color: "rgba(74,74,74,1)",
    fontFamily: "roboto-regular",
    fontSize: 24,
    paddingLeft: 8
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#000",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  },
  text: {
    top: 125.13,
    left: "18.26%",
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 60,
    fontWeight: "bold",
    fontStyle: "normal",
    textAlign: "justify"
  }
});
