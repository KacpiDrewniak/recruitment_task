import {StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';
import {LayoutType} from '../../type';

export const Layout = ({children}: LayoutType) => {
  return <View style={container}>{children}</View>;
};

const {container} = StyleSheet.create({
  container: {
    flex: 1,
  },
});
