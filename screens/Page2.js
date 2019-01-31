import React from 'react';
import { View, Text } from 'react-native';
import 

const Categories = (props) => {
  const { id, name } = this.props.navigation.getParam('category', { id = 0, name = 'supot' });
  return (
    <View>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  )
};

export default Page2;
