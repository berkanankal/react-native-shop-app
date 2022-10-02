import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./Login.style";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require("../../assets/login-logo.png")}
          tintColor="#fff"
        />
      </View>
      <View style={styles.body_container}>
        <TextInput placeholder="Kullanıcı Adı" style={styles.input} />
        <TextInput placeholder="Şifre" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.login_button}>
          <Text style={styles.login_button_text}>Giriş yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
