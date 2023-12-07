import {Alert, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Post} from '../../types/types.ts';
import {useNavigation} from '@react-navigation/native';
import {actionDeletePost, actionGetPosts} from '../../actions';
import {loadPosts} from '../../store/slices/postsSlice.ts';
import {useAppDispatch} from '../../store';

export const ListElement = ({title, id}: Post) => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  const handleRemove = async () => {
    try {
      await actionDeletePost(id!);
      const {data} = await actionGetPosts();
      dispatch(loadPosts(data));
    } catch (err) {
      Alert.alert('error');
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Post', {id})}>
      <Text>{title}</Text>
      <Button title="usuń" onPress={handleRemove} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
