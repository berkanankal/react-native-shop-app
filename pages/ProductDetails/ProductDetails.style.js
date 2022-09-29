import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: window.width,
    height: 300,
  },
  body_container: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontStyle: "italic",
    fontSize: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "right",
  },
});
