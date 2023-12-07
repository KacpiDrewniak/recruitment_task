import {Layout} from '../components';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants/colors.ts';
import {useAppDispatch, useAppSelector} from '../store';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {actionDeletePost, actionGetPosts} from '../actions';
import {loadPosts} from '../store/slices/postsSlice.ts';

export const PostScreen = ({route: {params}}: any) => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const post = useAppSelector(
    state => state.posts?.posts.find(({id}) => id === params?.id),
  );

  if (!post) {
    return <></>;
  }

  const deleteCurrentPost = async () => {
    try {
      await actionDeletePost(post.id!);
      navigate('List');
      const {data} = await actionGetPosts();
      dispatch(loadPosts(data));
    } catch (err) {
      Alert.alert('error');
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.titleTypography}>{post.title}</Text>
        <Text style={styles.descriptionTypography}>{post.description}</Text>
        <Button onPress={() => navigate('NewPost')} label="Dodaj nowy" />
        <Button onPress={deleteCurrentPost} label="Usuń ten post" />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 32,
  },
  titleTypography: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },

  descriptionTypography: {
    textAlign: 'center',
    fontSize: 16,
  },
});
