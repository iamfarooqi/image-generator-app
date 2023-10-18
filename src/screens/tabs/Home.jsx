import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';

const Home = () => {
  const navigation = useNavigation();

  const buttons = ['All', 'People', 'Technology', 'Animal', 'Nature'];

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
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {buttons.map((buttonText, index) => (
              <TouchableOpacity key={index} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingStart: 16,
    paddingEnd: 16,
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 12,
    margin: 5,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    padding: 5,
  },
});
