import React from "react";
import { View, ScrollView, Dimensions, Text, StyleSheet } from "react-native";
import Unorderedlist from "react-native-unordered-list";

const { height, widht } = Dimensions.get("window");


export default function TermsnCondition({ navigation }) {
  return (

    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.ScrollView}
    >
      <View style={styles.MainContainer}>
        <Text style={styles.Heading}>Terms Conditions & Privacy Policy</Text>
        <Text style={styles.SecondHeading}>
          {" "}
          Important Terms for Using the App{" "}
        </Text>

        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that I will only post photos or videos that are short by
            me and for me.{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that I will not save or share any photos, videos or text
            posted by others on the app, on my social media.{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that if there are other people in my photos or videos or
            text, I will take their permission before posting them on the App.
            Else I will find others, or change names with their consent.{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that I will not use derogatory, defamatory, vulgar,
            discriminatory or pornographic language or visuals to complete my
            challenge
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that I will not harm myself or anybody in a bid to
            complete my challenge.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that if any derogatory, defamatory, vulgar, discriminatory
            or pornographic language or visuals are used, the strict action
            that will be taken against me.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that I am a group administrator, I will take
            responsibility to immediately flag or delete any offensive posts.
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that the organization or the creators of the happiness App
            will not be bearing any expenses App will not be bearing any
            expenses for me to complete my challenge.
          </Text>
        </Unorderedlist>
        <Text style={styles.SecondHeading}> Privacy Policy</Text>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I agree that the Happiness Challenge App is a part of all the
            digital properties owned by India Parenting Pvt Ltd that share data,
            but no data will available to the public.{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I allow the creators of the Happiness Challenge App to use the data
            that I provide for analysis and research which will be shared by all
            the digital properties owned by India Parenting Pvt Ltd.{" "}
          </Text>
        </Unorderedlist>

        <Text style={styles.SecondHeading}> Safety and Security Issues </Text>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            I agree that the creators of The Happiness Challenge App and the
            associated organizations and parties will not be responsible if I
            get harmed, fall in any kind os trouble or expose myself to any kind
            of risk while performing the Challenges that I get through this app.
            I agree that I will be accepting and undertaking all the challenges
            at my own risk. I am responsible for keeping my app my device safe
            and secure.
          </Text>
        </Unorderedlist>

        <Text style={styles.SecondHeading}>Misuse of the App</Text>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I will use the App only for acceptable, authorized and legal
            purposes. I will not do any activity that leads to the infringement
            of the rights of The Happiness Challenge App. I leave to the
            discreation of India parenting Pvt Ltd to take strict action if I am
            found involved in any practices that are intended to harm the
            organization or its users{" "}
          </Text>
        </Unorderedlist>
        <Text style={styles.SecondHeading}> Third Parties </Text>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I may require using websites, apps, content or other services, and
            products of third parties for undertaking the challenges. In these
            cases, I agree to abide by the terms and Conditions, disclaimer and
            Privacy Policies of such third parties{" "}
          </Text>
        </Unorderedlist>

        <Text style={styles.SecondHeading}> Services of Happiness Challenge App </Text>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I accept that the Happiness Challenge App does not warrant that
            their services will always be error-free, uninterrupted, timely,
            perfect, safe and secure or the information that they provide will
            be completely accurate. The Happiness Challenge App is not
            responsible for its users and their actons of its users.{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            By accepting the terms and Conditions, I agree that these challenges
            are made for light- hearted enjoyment and fun purpose , they are
            conceptualized to reduce sterss and depression and spread happiness
            and joy. So, I will make sure that I use my judgment white
            performing these challenges and I complete them in such a way that I
            do not harm myself or anyone else in the process{" "}
          </Text>
        </Unorderedlist>
        <Unorderedlist style={{ fontSize: 25, marginTop: 10 }}>
          <Text style={styles.Content}>
            {" "}
            I accept that the terms, Conditions and Privacy Policies of the App
            are subject to change from time to time without any prior notice to
            the users.{" "}
          </Text>
        </Unorderedlist>
      </View>
    </ScrollView>

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