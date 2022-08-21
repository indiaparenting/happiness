import React from "react";
import { View, Dimensions, Text, ScrollView, StyleSheet } from "react-native";

const { height, widht } = Dimensions.get("window");
import Bg from '../components/App/Bg';

export default function FAQs({ navigation }) {
  return (
    <Bg top={50} hasBackCard={true} navigation={navigation}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
        <View style={styles.MainContainer}>
          <Text style={styles.FAQHeading}>FAQs</Text>
          <Text style={styles.Heading}>General</Text>
          <Text style={styles.QuestionContent}>
            1. I am a private person. I don't like to share what I do for others.
          </Text>
          <Text style={styles.Content}>
            Ans: The reason we encourage you to share your experiences is because
            the more you share the more you Inspire others to undertake similar
            acts. When you inspire others, you start several chains of goodness,
            which eventually come back to you in the form of abundant happiness.
            You will be surprised when people will thank you for inspiring them
            when they become happier. In this waay, not only you are becoming
            happier , you are also spreading happiness{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            2. What if I am unable to complete some of the challenges?{" "}
          </Text>
          <Text style={styles.Content}>
            Ans: It is alright if you don,t complete all the challenges. But do
            continue to be part of the app and watch what others do. You will get
            inspired and subconsciously imbibe their qualities.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            3. What if I feel that I am not doing the tasks genuinely or others
            are not doing the tasks genuinely.{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            There is a phrase called "Fake it till you make it". It means that
            even if you feel taking these challenges is contrived or artificial
            for you, we encourage you to do them, because these acts will
            gradually become second nature to you.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            4. How will expressing values make me happy? Exercise, dancing and
            cooking also makes me happy.{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: Fitness, exercise and personal goals setting can certainly give
            you happiness but not lasting happiness. Expressing your core values
            can give you lasting happiness since it improves relationships.
            Research has repeatedly shown that people with strong personal
            connections are the happiest. As you complete these challenges your
            relationships with others are bound to Improve. It is a guaranteed way
            to get happiness.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            5. I am already happy. Why do I need this app?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            If you are already very happy, then that is fabulous! In fact, you can
            be the biggest proponent of the app.{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Because this app will help you take your happiness one step further.
            You will be able to inspire others to also become happy, and
            indirectly spread your happiness all around. And don't forget, you
            will receive gratitude from everybody that you inspire And by the way,
            If your kindness is at 85%m(which it must be for you to be so happy),
            then see how you can take it to 90%!{" "}
          </Text>
          <Text style={styles.Heading}> Challenges </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            1. How did you select the values?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            There are innumerable values but we have chosen 12 values that are
            most important to our relationships and daily living.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            2. What is the guarantee that I will become happier?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: The more sincerely you complete your challenges (and you continue
            doing them!) the more likely your relationships will improve and the
            happier you will become.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            3. What is the deadline for these challenges?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: The challenges that you will get need to be complete by the end
            of the month (mid-night of the last day of the month), before the
            value for the next month starts{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            4. Can I challenge on my own?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: You are always welcome to suggest new challenges to us in the
            feedback form{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            5. Is it compulsory to complete all the challenges?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: The more challenges you complete, the end goal of making you
            happier is more likely to get achieved. When you complete more
            challenges, you will also get more points, making you elligible for
            prizes and certificates.{" "}
          </Text>
          <Text style={styles.Heading}> App </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            1. Can I delete a photo, video or text that I have posted?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: Yes, you can delete the photo, video or text that you have posted
            but note that the corresponding number of points will get deducted
            from the total. You can always post a revised photo, video or text to
            complete the challenge.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            2. Will my posts be seen by any outsiders?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            No. All your posts will be restricted only to your organization and
            nobody can share your posts.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            3. Can I message somebody privately?{" "}
          </Text>
          <Text style={styles.Content}>
            Ans: The feature of messaging somebody privatley is currently not
            available.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            4. Can I share any of these posts that I have created on social media?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: The feature of sharing posts on social media handles is not
            available in this version of the App, but will be coming soon.
            However, note that you will never be allowed to share the posts that
            others have created. similarly, nobody will be able to share posts
            that you have created.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            5. Can I give feedback on App?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: Yes, we would love it if you give feedback. We will be creating
            the feedback form shortly.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            6. I want my friends to also use tis app?{" "}
          </Text>
          <Text style={styles.Content}>
            Ans: We are currently testing only for organizations, But we will let
            you know when we create it for the public.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            7. I cannot see the number of 'likes' on the post?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: We have deliberately not allowed likes because we want people to
            engage in completing the Challenges. But if a suffici number of users
            want this feature, then we will include it in the subsequent version.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            8. Why have you not incuded yoga, meditation or fitness in this App?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: For the time being, we are only sticking to the values; other
            apps are already doing that which are fine. Also, as we mentioned
            earlier there is no guarantee that activities like Fitness and yoga
            will give you lasting happiness.
          </Text>

          <Text style={styles.Heading}> Points </Text>
          <Text style={styles.QuestionContent}> 1. How to earn points? </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: We have given video posts greater weightage because they are more
            inspiring. So if you would like to earn more points, you can post more
            videos.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            2. Will the length of the video affect my points?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: The length of the video has got nothing to do with points. Each
            video uploaded whether it is longer or shorter will get the same
            number of points provided that the task is completed.{" "}
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            3. Will the quality of the photos and videos affect my points?{" "}
          </Text>
          <Text style={styles.Content}>
            Ans: It is the responsibility of the group leader to ensure that the
            quality of the videos and photos is good. The group leader should
            notify the member in case the quality of photos or videos is not so
            good.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            4. What kind of prizes will receive?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: Management will be deciding the prizes.
          </Text>
          <Text style={styles.QuestionContent}>
            {" "}
            5. Do I get any additional points for my creativity?{" "}
          </Text>
          <Text style={styles.Content}>
            {" "}
            Ans: There are no additional points for creativity but Management may
            reward you for creativity. Also, the more creative the video is the
            more inspiring it is to others and more chains of goodness you will be
            starting (and the happier you will be!).
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
  FAQHeading: {
    color: "#45c5d6",
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: 'Montserrat_700Bold_Italic',
    fontSize: 21,
    marginTop: 20,
  },
  Heading: {
    color: "#C50201",
    textAlign: "center",
    textDecorationLine: "underline",
    fontFamily: 'Montserrat_700Bold_Italic',
    fontSize: 18,
    marginTop: 20,
  },
  QuestionContent: {
    marginTop: 20,
    fontSize: 15,
    color: "black",
    fontFamily: global.SEMIBOLD,
  },
  Content: { marginTop: 15, fontSize: 15, color: "#56595A", fontFamily: global.REGULAR, },
});
