import React from "react";
import { View, ScrollView, Dimensions, Text, StyleSheet } from "react-native";
import Unorderedlist from "react-native-unordered-list";

const { height, widht } = Dimensions.get("window");
import Bg from '../components/App/Bg';
import TermsnCondition from "./TermsnCondition";

export default function TermsConditions({ navigation }) {
  return (
    <Bg top={50} hasBackCard={true} navigation={navigation}>
      <TermsnCondition></TermsnCondition>
    </Bg>
  );
}


const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: "transparent",
    width: widht,
  },
  MainContainer: {
    backgroundColor: "transparent",
    width: widht,
    padding: 15,
  },
  Heading: {
    color: "#C50201",
    textAlign: "center",
    // textDecorationLine: "underline",

    fontSize: 21,
    marginTop: 20,
    fontFamily: 'Montserrat_700Bold_Italic'
  },
  SecondHeading: {
    color: "#45c5d6",
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: 'Montserrat_700Bold_Italic',
    fontSize: 21,
    marginTop: 20,
  },
  Content: { marginTop: 15, fontSize: 15, color: "#56595A", fontFamily: global.REGULAR, },
})