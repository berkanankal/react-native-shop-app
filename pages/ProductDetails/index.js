import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./ProductDetails.style";
import axios from "axios";

const ProductDetails = ({ route }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${route.params.productId}`
      );
      setProduct(data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Something went wrong!</Text>;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: product.category.image,
        }}
        style={styles.image}
      />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
};

export default ProductDetails;
