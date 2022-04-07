import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';  
import Button from './src/_components/Button';

export default function App() {
 const [fontsLoaded] = useFonts({
    'biennale-black': require('./assets/fonts/Biennale-black.otf')
  });

  return (
    fontsLoaded?
      <View style={styles.container}>
        <Button onPress={() => {}} placeholder="Clique no botão"/>
        <Text style={{fontFamily: 'biennale-black' }}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> :
      <AppLoading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
