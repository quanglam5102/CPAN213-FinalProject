import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Recipes({navigation, route}) {
    return (
      <View>
        <Text>This is the Recipes Page</Text>
        <Button title="Go to Products Page" onPress={() => {
        navigation.navigate("Products")
      }} />
      </View>
    );
}