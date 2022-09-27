import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderRadius: 15,
  },
  body_container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  price: {
    textAlign: "right",
    fontStyle: "italic",
    fontSize: 16,
  },
});
