import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {
    return (
      <LinearGradient
        style={styles.container}
        colors={[COLORS.secondary, COLORS.primary]}
      >
        <View style={styles.backgroundImagesContainer}>
          <Image
            source={require("../assets/hero1.jpg")}
            style={styles.image1}
          />
  
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image2}
          />
  
          <Image
            source={require("../assets/hero3.jpg")}
            style={styles.image3}
          />
  
          <Image
            source={require("../assets/hero2.jpg")}
            style={styles.image4}
          />
        </View>
  
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Let's Get</Text>
          <Text style={styles.subtitle}>Started</Text>
  
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Connect with each other with chatting</Text>
            <Text style={styles.description}>Calling, Enjoy Safe and private texting</Text>
          </View>
  
          <Button
            title="Join Now"
            onPress={() => navigation.navigate("Signup")}
            style={styles.joinNowButton}
          />
  
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account ?</Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Login</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImagesContainer: {
      flex: 1,
    },
    image1: {
      height: 100,
      width: 100,
      borderRadius: 20,
      position: "absolute",
      top: 10,
      transform: [
        { translateX: 20 },
        { translateY: 50 },
        { rotate: "-15deg" }
      ],
    },
    image2: {
      height: 100,
      width: 100,
      borderRadius: 20,
      position: "absolute",
      top: -30,
      left: 100,
      transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "-5deg" }
      ],
    },
    image3: {
      width: 100,
      height: 100,
      borderRadius: 20,
      position: "absolute",
      top: 130,
      left: -50,
      transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "15deg" }
      ],
    },
    image4: {
      height: 200,
      width: 200,
      borderRadius: 20,
      position: "absolute",
      top: 110,
      left: 100,
      transform: [
        { translateX: 50 },
        { translateY: 50 },
        { rotate: "-15deg" }
      ],
    },
    contentContainer: {
      paddingHorizontal: 22,
      position: "absolute",
      top: 400,
      width: "100%",
    },
    title: {
      fontSize: 50,
      fontWeight: '800',
      color: COLORS.white,
    },
    subtitle: {
      fontSize: 46,
      fontWeight: '800',
      color: COLORS.white,
    },
    descriptionContainer: {
      marginVertical: 22,
    },
    description: {
      fontSize: 16,
      color: COLORS.white,
      marginVertical: 4,
    },
    joinNowButton: {
      marginTop: 12,
      width: "100%",
    },
    loginContainer: {
      flexDirection: "row",
      marginTop: 2,
      justifyContent: "center",
    },
    loginText: {
      fontSize: 16,
      color: COLORS.white,
    },
    loginLink: {
      fontSize: 16,
      color: COLORS.white,
      fontWeight: "bold",
      marginLeft: 4,
    },
  });
  
  export default Welcome;