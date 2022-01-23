import React from 'react';
import { View,Text, StyleSheet, FlatList, ActivityIndicator, LogBox } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../navigation/NavigationService';
import {getPosts} from '../api/PostApi'
import Card from '../components/Card';
import { useSelector,useDispatch} from 'react-redux'
import {fetchPosts } from '../redux/actions/postsActions';

LogBox.ignoreAllLogs(true)


const HomeScreen : React.FC = () => {

    const dispatch = useDispatch()

    const {posts, isFetching,error} = useSelector((state) => state.postReducer)
 
    React.useEffect(() => {
     dispatch(fetchPosts())
    },[])

    return(
        <View style={styles.root}>
           {isFetching && <ActivityIndicator size="large" color="rgba(231,76,60,1)" style={{flex:1}}/>}
           {posts.length>0 && <FlatList style ={{flex:1}} data={posts} renderItem={({ item, index, separators }) => <Card data={item} />} />}
            <ActionButton
            buttonColor="rgba(231,76,60,1)"
            onPress={() => NavigationService.navigate('Post')}
               />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})


export default HomeScreen;

