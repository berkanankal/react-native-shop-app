import { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./Login.style";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (value, type) => {
    setFormData({ ...formData, [type]: value });
  };

  const handleLogin = () => {
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", formData)
      .then((response) => {
        console.log(response.data);
        navigation.navigate("ProductsPage");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (error) {
    return <Text>Something went wrong!</Text>;
  }

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
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(value) => handleChange(value, "email")}
          value={formData.email}
        />
        <TextInput
          placeholder="Şifre"
          secureTextEntry
          style={styles.input}
          onChangeText={(value) => handleChange(value, "password")}
          value={formData.password}
        />
        <TouchableOpacity style={styles.login_button} onPress={handleLogin}>
          <Text style={styles.login_button_text}>Giriş yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
