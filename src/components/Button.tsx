import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

type ButtonProps = {
  text: string;
  onTap: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onTap }) => {
  return (
    <>
      <View style={buttonStyle.button}>
        <Text style={buttonStyle.text} onPress={onTap}>
          {text}
        </Text>
      </View>
    </>
  );
};

const buttonStyle = StyleSheet.create({
  button: {
    borderRadius: 24,
    height: "25%",
    width: "90%",
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 70,
    backgroundColor: "#5a6fe4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    zIndex: 6,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});
