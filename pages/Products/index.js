import { useState, useEffect } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import axios from "axios";
import styles from "./Products.style";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=50"
      );
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default Products;
