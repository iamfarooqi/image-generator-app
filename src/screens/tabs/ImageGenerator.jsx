import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
import Prompt from '../prompt';
import Header from '../../common/Header';
import tailwind from 'twrnc';

const ImageGenerator = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function generateImage(inputValue) {
    setIsLoading(true);
    const data = {
      inputs: inputValue,
    };
    const apiToken = process.env.EXPO_PUBLIC_API_TOKEN;
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
        {
          headers: { Authorization: `Bearer ${apiToken}` },
          method: 'POST',
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.blob();
        setGeneratedImage(result);
      } else {
        console.error('API call failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }

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

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
            <Text style={styles.loadingText}>Generating Image...</Text>
          </View>
        )}

        {generatedImage && !isLoading && (
          <Image
            source={{ uri: URL.createObjectURL(generatedImage) }}
            style={{ width: 300, height: 300 }}
          />
        )}

        <View style={tailwind`flex-1 bg-[#1a1a1a] mx-3`}>
          <Prompt onGenerate={generateImage} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
  },
});

export default ImageGenerator;
