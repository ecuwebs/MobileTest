import React, { useEffect , useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getUser } from '../api/getUser';
import { getComments } from '../api/getComments';
import useApi from '../hooks/useApi';
import Colors from '../config/colors';
import AppText from '../components/AppText';

const DetailScreen = ({ route }) => {

  const {params: post} = route;

  const [user, setUser] = useState();
  const [comments, setComments] = useState([]);
  
  const getUserApi = useApi(getUser);
  const getCommentsApi = useApi(getComments); 

  const fetchUser = async userId => {
    const userObj = await getUserApi.request(userId);
    userObj && setUser(userObj);
  }

  const fetchComments = async postId => {
    const commmentsObj = await getCommentsApi.request(postId);
    commmentsObj && setComments(commmentsObj);
  }

  useEffect(() => {
    fetchUser(post.userId);
    fetchComments(post.id);
  }, []);

  return (
    <ScrollView 
      showsHorizontalScrollIndicator={false} 
      showsVerticalScrollIndicator={false}>
      <AppText style={styles.header}>Description</AppText>
      <AppText style={styles.paddingHorizontal}>{post.body}</AppText>

      
      {user && (
        <>
          <AppText style={styles.header}>User</AppText>
          <View style={styles.paddingHorizontal}>
            {user.name && <AppText style={styles.marginBottom}>Name: { user.name }</AppText>} 
            {user.email && <AppText style={styles.marginBottom}>Email: { user.email }</AppText>} 
            {user.phone && <AppText style={styles.marginBottom}>Phone: { user.phone }</AppText>} 
            {user.website && <AppText>Website: { user.website }</AppText>} 
          </View>
        </>
      )}
      
      {comments.length > 0 && (
        <View style={{ marginBottom: 40 }}>
          <AppText style={styles.header}>Comments</AppText>
          <View style={styles.paddingHorizontal}>
            {comments.map((comment, key) => (
              <View key={key.toString()} style={[ styles.commentBlock, styles.marginBottom ]}>
                <AppText>{comment.body}</AppText>
              </View>
            ))}
          </View>
        </View>
      )}


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  commentBlock: { 
    borderBottomColor: Colors.mediumDark, 
    borderBottomWidth: 1, 
    paddingBottom: 10 
  },
  marginBottom: {
    marginBottom: 10
  },
  paddingHorizontal: {
    paddingHorizontal: 10
  }
});

export default DetailScreen;