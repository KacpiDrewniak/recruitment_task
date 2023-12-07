import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {ButtonType} from '../../type';
import {colors} from '../../constants/colors.ts';

export const Button = ({label, onPress}: ButtonType) => {
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      <Text style={text}>{label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const {container, text} = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: colors.lightBlue,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderColor: colors.lightBlue,
    borderWidth: 2,
  },
});
