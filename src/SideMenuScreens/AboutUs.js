import React from "react";
import { View, Dimensions, Text, ScrollView, StyleSheet } from "react-native";

const { height, widht } = Dimensions.get("window");
import Bg from '../components/App/Bg';
export default function AboutUs({ navigation }) {
  return (
    <Bg top={50} hasBackCard={true} navigation={navigation}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
        <View style={styles.MainContainer}>
          <Text style={styles.Heading}>About the Happiness Challenge App</Text>
          <Text style={styles.Content}>
            Today a lot of people are grapping with loneliness and aloneness.
            Sadly, even children are becoming victims of it. It is seriously
            affecting the physical and emotional health of individuals. These
            issues are robbing away the true happines of individuals. It is even
            proved by many researches that poor social connections can lead to
            unhappiness. In today's pandemic situation as we are locked in the
            four walls of our house these issue have become even more
            overwhelming.{" "}
          </Text>
          <Text style={styles.Content}>
            Although individuals are coping with conditions like loneliness and
            aloneness, they are not making an effort to do something or
            themeselves that can increase their Happiness. Some individuals do not
            even know that they are coping with such conditions. So, today in the
            era of Apps, there was a need to introduce an App that can help to
            boost the Happiness Quotient (HQ) of an individual.
          </Text>
          <Text style={styles.Heading}>What is the Happiness Challenge App?</Text>
          <Text style={styles.Content}>
            The Happiness Challenge App throws at you different Challenges in the
            form of tasks that you have to complete which can ultimately make you
            and the people around you happy . The Happiness Challenge App can be
            downloaded from the play store{" "}
          </Text>
          <Text style={styles.Heading}>What are These Challenges Like?</Text>

          <Text style={styles.Content}>
            Challenges are based on the value of that particular month. If the
            value of February is Love, you will get Challenges related to it. For
            example; you will get a Challenge like 'Gift a pen to your friend or
            colleague' or 'smile at five people you meet today' etc{" "}
          </Text>
          <Text style={styles.Heading}>How Do Challenge Help?</Text>
          <Text style={styles.Content}>
            {" "}
            These Challenges are mainly based on values like kindness, love,
            friendship, helpfulness, honesty, courage, etc. When human values, he
            or she can truly become happy{" "}
          </Text>
          <Text style={styles.Content}>
            Our goal is to spread Happiness through Happiness Challenge App, so
            get set and take the happiness Challenges right away!{" "}
          </Text>
        </View>
      </ScrollView>
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
    textDecorationLine: "underline",
    fontFamily: 'Montserrat_700Bold_Italic',
    fontSize: 18,
    marginTop: 20,
  },
  Content: {
    marginTop: 20,
    fontSize: 15,
    color: "#56595A",
    fontFamily: global.REGULAR,
  },
});
