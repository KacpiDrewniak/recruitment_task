import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {Post as PostType} from '../../types/types.ts';
import {Button} from '../Button';
import {colors} from '../../constants/colors.ts';

export const Post = ({
  img,
  title,
  description,
  action,
  subtitle,
  variant = 'primary',
}: PostType) => {
  if (variant === 'secondary') {
    return (
      <ImageBackground source={img} style={secondaryContainer}>
        <Text style={titleTypography}>{title.toUpperCase()}</Text>
      </ImageBackground>
    );
  }

  if (variant === 'primary') {
    return (
      <View style={container}>
        <View>
          <Text style={titleTypography}>{title.toUpperCase()}</Text>
          <Text style={subtitleTypography}>{subtitle?.toUpperCase()}</Text>
        </View>
        <Text style={descriptionTypography}>{description}</Text>
        <Button onPress={action} label="Zobacz więcej" />
      </View>
    );
  }

  return <></>;
};

const {
  container,
  secondaryContainer,
  subtitleTypography,
  titleTypography,
  descriptionTypography,
} = StyleSheet.create({
  secondaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
  titleTypography: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  subtitleTypography: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.lightBlue,
    fontSize: 24,
  },
  descriptionTypography: {
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    gap: 32,
    padding: 32,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
