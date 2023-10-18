import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'twrnc';
const { height, width } = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
  searchIcon,
  isCart,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      {leftIcon && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onClickLeftIcon();
          }}
        >
          <Image
            source={leftIcon}
            style={{ tintColor: '#fff', ...tailwind`w-full h-full` }}
          />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={tailwind`flex flex-row items-center justify-between`}>
        {searchIcon && (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate('Search');
            }}
          >
            {searchIcon && (
              <Image
                source={searchIcon}
                style={{ tintColor: '#fff', ...tailwind`w-full h-full` }}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    marginTop: 30,
    backgroundColor: '#1a1a1a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 35,
    height: 35,
    borderRadius: 50,
    padding: 8,
    borderColor: '#fff',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
