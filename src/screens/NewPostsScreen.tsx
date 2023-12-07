import {Layout} from '../components';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {actionDeletePost, actionGetPosts, actionPostPosts} from '../actions';
import {loadPosts} from '../store/slices/postsSlice.ts';
import {useAppDispatch} from '../store';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export const NewPostScreen = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const createNewPost = async () => {
    try {
      await actionPostPosts(title, description);
      const {data} = await actionGetPosts();
      dispatch(loadPosts(data));
      navigate('List' as never);
    } catch (err) {
      Alert.alert('error');
    } finally {
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Layout>
      <View>
        <TextInput
          style={textInput}
          placeholder="Wprowadź tytuł"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={textInput}
          placeholder="Wprowadź opis"
          value={description}
          onChangeText={text => setDescription(text)}
          multiline
          numberOfLines={4}
        />

        <Button onPress={createNewPost} title="Dodaj" />
      </View>
    </Layout>
  );
};

const {textInput} = StyleSheet.create({
  textInput: {
    padding: 20,
    fontSize: 16,
  },
});
