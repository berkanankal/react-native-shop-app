import { useState, useEffect } from "react";
import { ScrollView, Text, View, FlatList } from "react-native";
import axios from "axios";
import styles from "./Products.style";
import ProductCard from "../../components/ProductCard";

const Products = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://api.escuelajs.co/api/v1/products?offset=0&limit=20"
      );
      setProducts(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductSelect = (productId) => {
    navigation.navigate("ProductDetailsPage", { productId });
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Something went wrong!</Text>;
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            handleProductSelect={() => handleProductSelect(item.id)}
          />
        )}
      />
    </View>
  );
};

export default Products;
