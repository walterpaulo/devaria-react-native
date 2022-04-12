import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';  
import Button from './src/_components/Button';
import Input from './src/_components/Input';
import { useState } from 'react';
import UploadImage from './src/_components/UploadImage';

export default function App() {
  const [email, setEmail] = useState<string>()
 const [fontsLoaded] = useFonts({
    'biennale-black': require('./src/_assets/fonts/Biennale-black.otf')
  });

  return (
    fontsLoaded?
      <View style={styles.container}>
        {/* <Input onChangeText={(e: string) => {}} placeholder={"Digite seu email"} 
        value={email}/> */}
        <UploadImage />
        <Button onPress={() => {}} placeholder="Clique no botão" loading={false} disabled={false} />
        <StatusBar style="auto" />
      </View> :
      <AppLoading />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
