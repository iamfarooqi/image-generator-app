import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import ImageGenerator from './tabs/ImageGenerator';
import Home from './tabs/Home';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 2 ? (
        <ImageGenerator />
      ) : // selectedTab == 2 ? (
      //   <Notification />
      // ) : selectedTab == 4 ? (
      //   <User />
      null}
      {!isKeyboardVisible && (
        <View style={styles.bottomView}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}
          >
            <Image
              source={require('../images/home.png')}
              style={
                selectedTab == 0
                  ? { tintColor: '#808080', width: 30, height: 30 }
                  : { tintColor: '#fff', width: 30, height: 30 }
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => navigation.navigate('Generator')}
          >
            <Image
              source={require('../images/generator.png')}
              style={
                selectedTab == 2
                  ? { tintColor: '#808080', width: 30, height: 30 }
                  : { tintColor: '#fff', width: 30, height: 30 }
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}
          >
            <Image
              source={
                selectedTab == 1
                  ? require('../images/save_fill.png')
                  : require('../images/save.png')
              }
              style={
                selectedTab == 1
                  ? { tintColor: '#808080', width: 30, height: 30 }
                  : { tintColor: '#fff', width: 30, height: 30 }
              }
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}
          >
            <Image
              source={require('../images/user.png')}
              style={
                selectedTab == 4
                  ? { tintColor: '#808080', width: 30, height: 30 }
                  : { tintColor: '#fff', width: 30, height: 30 }
              }
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',

    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomView: {
    // borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '96%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
