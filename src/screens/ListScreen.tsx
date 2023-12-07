import {Layout} from '../components';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import {usePosts} from '../store/selectors';
import {ListElement} from '../components/ListElement';

export const ListScreen = () => {
  const posts = usePosts();
  return (
    <Layout>
      <ScrollView>
        {posts?.map(props => <ListElement {...props} key={props.id} />)}
      </ScrollView>
    </Layout>
  );
};
