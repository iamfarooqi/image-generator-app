import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Prompt from '../prompt';
import Header from '../../common/Header';
import tailwind from 'twrnc';

const ImageGenerator = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={tailwind`flex-1`}
    >
      <View style={tailwind`flex-1 bg-[#1a1a1a]`}>
        <Header
          searchIcon={require('../../images/noti.png')}
          title={'Generator'}
        />
        <View style={tailwind`flex-1 bg-[#1a1a1a] mx-3`}>
          <Prompt />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default ImageGenerator;
