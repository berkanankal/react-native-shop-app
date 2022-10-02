import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    backgroundColor: "#03a9f4",
    flex: 1,
  },
  logo_container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingRight: 20,
  },
  logo: {
    width: window.width,
    height: window.height / 3,
    resizeMode: "contain",
  },
  body_container: {
    padding: 20,
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  login_button: {
    alignItems: "center",
    backgroundColor: "#0277bd",
    padding: 10,
    borderRadius: 8,
  },
  login_button_text: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
