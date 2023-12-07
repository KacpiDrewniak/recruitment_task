import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const Loading = () => {
  return (
    <View style={container}>
      <ActivityIndicator />
    </View>
  );
};

const {container} = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
