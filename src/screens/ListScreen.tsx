import {Layout} from '../components';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {usePosts} from '../store/selectors';
import {ListElement} from '../components/ListElement';
import {Button} from '../components/Button';
import {useNavigation} from '@react-navigation/native';

export const ListScreen = () => {
  const {navigate} = useNavigation();
  const posts = usePosts();
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          {posts?.map(props => <ListElement {...props} key={props.id} />)}
        </ScrollView>
        <Button
          onPress={() => navigate('NewPost' as never)}
          label="Dodaj nowy"
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
});
