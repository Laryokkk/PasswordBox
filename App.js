import { StyleSheet, View } from 'react-native';
import AccountGroupList from './src/screens/AccountGroupList';

export default function App() {
  return (
    <View style={styles.container}>
      <AccountGroupList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
});
