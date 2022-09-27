import { useState, useEffect } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import axios from "axios";
import styles from "./Products.style";
import ProductCard from "../../components/ProductCard";

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
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

export default Products;
