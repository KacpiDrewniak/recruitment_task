import {ReactNode} from 'react';
import {GestureResponderEvent, ImageSourcePropType} from 'react-native';

export type Post = {
  img?: ImageSourcePropType;
  variant?: 'primary' | 'secondary';
  subtitle?: string;
  action?: (event: GestureResponderEvent) => void;
  createdAt?: string;
  id?: number;
  title: string;
  description: string;
};

export type ButtonType = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
};

export type LayoutType = {
  children: ReactNode;
};
