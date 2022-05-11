import React, { useEffect , useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getUser } from '../api/getUser';
import { getComments } from '../api/getComments';
import useApi from '../hooks/useApi';
import Colors from '../config/colors';

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
      <Text style={styles.header}>Description</Text>
      <Text style={styles.paddingHorizontal}>{post.body}</Text>

      
      {user && (
        <>
          <Text style={styles.header}>User</Text>
          <View style={styles.paddingHorizontal}>
            {user.name && <Text style={styles.marginBottom}>Name: { user.name }</Text>} 
            {user.email && <Text style={styles.marginBottom}>Email: { user.email }</Text>} 
            {user.phone && <Text style={styles.marginBottom}>Phone: { user.phone }</Text>} 
            {user.website && <Text>Website: { user.website }</Text>} 
          </View>
        </>
      )}
      
      {comments.length > 0 && (
        <View style={{ marginBottom: 40 }}>
          <Text style={styles.header}>Comments</Text>
          <View style={styles.paddingHorizontal}>
            {comments.map((comment, key) => (
              <View key={key.toString()} style={[ styles.commentBlock, styles.marginBottom ]}>
                <Text>{comment.body}</Text>
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