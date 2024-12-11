import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.layout}
      />
      <Text>J's Tint and Car Audio</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  layout:{
    top: 0,
    left: 0,
    right: 0,
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
