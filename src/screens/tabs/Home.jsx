import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={tailwind`flex-1`}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/cart.png')}
        searchIcon={require('../../images/search.png')}
        title={'Home'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      <View style={tailwind`flex flex-row justify-between mt-2`}>
        <Text style={tailwind`text-white text-xl font-bold ml-4`}>Hello</Text>
      </View>
    </View>
  );
};

export default Home;
