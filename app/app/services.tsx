import { View } from 'react-native';

import { Link } from 'expo-router';


export default function Services() {
  return (
    <View>
      <Link href="/">home</Link>
      {/* ...other links */}
    </View>
  );
}