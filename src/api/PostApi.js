import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage'
import moment from 'moment';


const uploadPostApi = async (caption,imageUrl) => {
    
  return  await firestore().collection('Posts').add({
        caption:caption,
        imageUrl:imageUrl,
        createdAt: firestore.FieldValue.serverTimestamp()
    });
}

const uploadImageApi = async (imageUri,onProgress,onSuccess,onError) => {

    const imageExtension = imageUri.split(".").pop();
    const fileName = `img${moment().valueOf()}.${imageExtension}`;

    const storageRef = storage().ref(`posts.images/${fileName}`);
    storageRef.putFile(imageUri).on(
        storage.TaskEvent.STATE_CHANGED,
        snapShot => {
           // console.log('snapShot:'+ snapShot.state);
            //console.log('progress:'+ (snapShot.bytesTransferred/snapShot.totalBytes)*100);
            onProgress((snapShot.bytesTransferred/snapShot.totalBytes)*100)
            if(snapShot.state === storage.TaskState.SUCCESS){
                console.log('Success');
            }
        },
        error => {
            onError(error.message)
            console.log('image Upload error'+ error.toString());
        },
        ()=> {
            storageRef.getDownloadURL().then(url =>{
            //onComplete(url)
            onSuccess(url)
            }).catch(err => {
               onError(err.message)
                //console.log(err);
            })
        }
    )
    
}

const getPosts = async () => {
       return  await firestore().collection('Posts').orderBy('createdAt').get()
   }

export {uploadPostApi,getPosts, uploadImageApi}