import React from 'react';
import { View,Text,StyleSheet, Image, TextInput, Button, ActivityIndicator, Keyboard } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from '../navigation/NavigationService';
import { useSelector,useDispatch} from 'react-redux'
import {resetImageApiStore, uploadImage } from '../redux/actions/uploadImageActions';
import {resetPostApiStore, uploadPost } from '../redux/actions/uploadPostActions';

const PostScreen : React.FC = () => {
    const dispatch = useDispatch();
    const [imageUri, setImageUri] = React.useState();
    const [caption, setCaption] = React.useState();
  
    const {isImageUploading, error,url,progress} = useSelector((state) => state.uploadImageReducer)
    const {isUploading, error : err,success} = useSelector((state) => state.uploadPostReducer)

    const pickImage = async () => {
        const result = await launchImageLibrary({mediaType:'photo',selectionLimit:1});
        const fileUri = result.assets[0].uri;
        setImageUri(fileUri);
        console.log(result);
    }

    const postData = () => {
      Keyboard.dismiss();
     dispatch(uploadImage(imageUri))
    }

    React.useEffect(() => {
     if(isImageUploading || isUploading){
         return;
     } 
     
     if(error || err){
         error && console.log(`ImageUpload Error: ${error}`);
         err && console.log(`postUpload Error: ${err}`);
         return;
     }
       
     if(success){
         NavigationService.reset('Home');
         return;
     }
     if(progress === 100 && !isImageUploading){
         dispatch(uploadPost(caption,url))
     }
    },[isUploading,isImageUploading])


    React.useEffect(() => {
        return function() {
            console.log("Unmounted");
            dispatch(resetImageApiStore())
            dispatch(resetPostApiStore())
        }
    },[])


    return(
        <View style={styles.root}>
           <View style={styles.imageContainer}>
          {!imageUri &&  <View>
          <Icon.Button
            name="photo"
            style={{height: 40}}
            backgroundColor="rgba(231,76,60,1)"
            onPress={pickImage}>
             Choose Photo
            </Icon.Button>
            </View>}
            {imageUri && <Image style={{height:200,width:200,marginHorizontal:20,borderRadius:8,alignItems:'center'}} source={{uri:imageUri}} />}
           </View>
           {imageUri &&  <TextInput style={styles.textInput} placeholder='Caption' value={caption} onChangeText={setCaption} />}
           {imageUri && <Button onPress={() => {
               postData()
           }} disabled={!caption} color="rgba(231,76,60,1)" title='Post' />}
            {(isImageUploading || isUploading) &&<View style={{height:'100%',width:'100%',position:'absolute',alignItems:'center',justifyContent:'center',backgroundColor:"rgba(231,76,60,0.3)"}}>
               <ActivityIndicator size="large" />
               <Text>{`Please wait uploading...${progress}`}</Text>
           </View>}
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    imageContainer: {
        flexDirection:'row'
    },
    textInput: {
        borderRadius: 4,
        borderWidth: 1,
        width: '100%',
        marginVertical: 10,
        color:'black',
    }
  });

export default PostScreen;

