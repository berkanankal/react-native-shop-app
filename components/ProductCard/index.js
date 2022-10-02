import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./ProductCard.style";

const ProductCard = ({ product, handleProductSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={handleProductSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.category.image,
          }}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
