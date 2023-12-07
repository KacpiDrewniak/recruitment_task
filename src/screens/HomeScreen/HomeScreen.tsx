import {Alert, ScrollView, Text} from 'react-native';
import {Layout, Post} from '../../components';
import {useEffect, useState} from 'react';
import {actionGetPosts} from '../../actions';
import {useAppDispatch} from '../../store';
import {Loading} from '../../components';
import {loadPosts} from '../../store/slices/postsSlice.ts';
import {usePosts} from '../../store/selectors';
import {useNavigation} from '@react-navigation/native';
import {description} from '../../../mocks';
import house from '../../assets/house.png';
import floor from '../../assets/floor.png';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();
  const posts = usePosts();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await actionGetPosts();
        dispatch(loadPosts(data));
      } catch (e) {
        Alert.alert('Błąd', 'Wystąpił błąd podczas pobierania postów');
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const goToList = () => navigate('List' as never);

  return (
    <Layout>
      <ScrollView>
        {posts?.length ? (
          <>
            <Post
              title="Kilka słów o nas"
              subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
              description={description}
              action={goToList}
            />
            <Post
              img={house}
              variant="secondary"
              title="Kilka słów o nas"
              subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
              description={description}
              action={goToList}
            />
            <Post
              title="Nasza oferta"
              subtitle="Dowiedz się więcej co możemy tobie zaoferować"
              description={description}
              action={goToList}
            />
            <Post
              img={floor}
              variant="secondary"
              title="Kilka słów o nas"
              subtitle="Czyli kim jesteśmy i dokąd zmierzamy"
              description={description}
            />
          </>
        ) : (
          <Text>Nie ma jeszcze żadnych postów</Text>
        )}
      </ScrollView>
    </Layout>
  );
};
